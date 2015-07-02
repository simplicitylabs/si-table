module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    library: grunt.file.readJSON('bower.json'),
    ngAnnotate: {
      options: {
        singleQuotes: true,
      },
      dist: {
        files: [
          {
            expand: true,
            src: ['src/<%= library.name %>/directives/**/*.js'],
            dest: 'annotated'
          },
        ],
      }
    },
    concat: {
      options: {
        separator: ''
      },
      library: {
        src: [
          'src/<%= library.name %>/<%= library.name %>.prefix',
          'src/<%= library.name %>/<%= library.name %>.js',
          'annotated/src/<%= library.name %>/directives/**/*.js',
          'src/<%= library.name %>/filters/**/*.js',
          'src/<%= library.name %>/services/**/*.js',
          'src/<%= library.name %>/<%= library.name %>.suffix'
        ],
        dest: 'dist/<%= library.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      jid: {
        files: {
          'dist/<%= library.name %>.min.js': ['<%= concat.library.dest %>']
        }
      }
    },
    jshint: {
      beforeConcat: {
        src: ['gruntfile.js', '<%= library.name %>/**/*.js']
      },
      afterConcat: {
        src: [
          '<%= concat.library.dest %>'
        ]
      },
      options: {
        // options here to override JSHint defaults
        multistr: true,
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true,
          angular: true
        },
        globalstrict: false
      }
    },
    watch: {
      options: {
        livereload: true
      },
      files: [
        'Gruntfile.js',
        'src/**/*',
        'example/*'
      ],
      tasks: ['default']
    },
    connect: {
      example: {
        options: {
          port: 9000,
          base: ['example', 'dist']
        }
      }
    },
    copy: {
      ghpages: {
        files: [
          {expand: true, flatten: true, src: ['dist/*'], dest: 'ghpages/'},
          {expand: true, flatten: true, src: ['example/*'], dest: 'ghpages/'}
        ]
      }
    },
    buildcontrol: {
      options: {
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      ghpages: {
        options: {
          dir: 'ghpages',
          remote: 'git@github.com:simplicitylabs/si-table.git',
          branch: 'gh-pages'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-build-control');
  grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.registerTask('default', ['jshint:beforeConcat', 'ngAnnotate', 'concat', 'jshint:afterConcat', 'uglify']);
  grunt.registerTask('livereload', ['default', 'watch']);
  grunt.registerTask('example', ['default', 'connect:example', 'watch']);
  grunt.registerTask('ghpages', ['default', 'copy:ghpages']);

};
