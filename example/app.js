angular.module('siTableExampleApp', [
    'siTable'
]);

angular.module('siTableExampleApp').filter('status', function () {
    var statuses = [
        'Pending',
        'OK',
        'Warning',
        'Error',
        'Fatal'
    ];
    var icons = [
        '<i class="fa fa-clock-o fa-spin"></i> Pending',
        '<span class="label label-success"><i class="fa fa-check"></i> OK</span>',
        '<span class="label label-warning"><i class="fa fa-exclamation-triangle"></i> Warning</span>',
        '<span class="label label-danger"><i class="fa fa-bug"></i> Error</span>',
        '<span class="label label-fatal"><i class="fa fa-ban"></i> Fatal</span>'
    ];
    return function (input, icon) {
        if (icon) {
            return icons[input];
        }
        return statuses[input];
    };
});


angular.module('siTableExampleApp').controller('ExampleCtrl', function($scope) {
    $scope.filter = {
        $: ''
    };
    $scope.params = {

    };
    $scope.tableData = [
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 4,
                testrunId: 41034
            },
            {
                status: 4,
                testrunId: 32802
            },
            {
                status: 4,
                testrunId: 30450
            }
            ],
            id: 5409,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5409/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:20:21Z",
                history: "000000040",
                id: 47424,
                resourceUri: "/api/v1/testruns/47424/",
                runBy: "testrun-47424",
                startTime: "2014-04-01T10:16:35Z",
                status: 4,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:05:21Z",
                    id: 1,
                    module: "d007_alta_top",
                    name: "sim_cmark_test",
                    resourceUri: "/api/v1/testcases/1/",
                    updated: "2014-02-28T09:05:21Z"
                },
                updated: "2014-04-01T10:20:21Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 4,
                testrunId: 41035
            },
            {
                status: 4,
                testrunId: 32803
            },
            {
                status: 4,
                testrunId: 30451
            }
            ],
            id: 5410,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5410/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:23:44Z",
                history: "000000040",
                id: 47425,
                resourceUri: "/api/v1/testruns/47425/",
                runBy: "testrun-47425",
                startTime: "2014-04-01T10:20:23Z",
                status: 4,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 2,
                    module: "d007_alta_top",
                    name: "sim_cpf_test",
                    resourceUri: "/api/v1/testcases/2/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:23:44Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41036
            },
            {
                status: 1,
                testrunId: 32804
            },
            {
                status: 1,
                testrunId: 30452
            }
            ],
            id: 5411,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5411/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:25:11Z",
                history: "000000010",
                id: 47426,
                resourceUri: "/api/v1/testruns/47426/",
                runBy: "testrun-47426",
                startTime: "2014-04-01T10:21:01Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 3,
                    module: "d007_alta_top",
                    name: "sim_drivers_aes",
                    resourceUri: "/api/v1/testcases/3/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:25:11Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41038
            },
            {
                status: 1,
                testrunId: 32806
            },
            {
                status: 1,
                testrunId: 30454
            }
            ],
            id: 5412,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5412/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:27:45Z",
                history: "000000010",
                id: 47428,
                resourceUri: "/api/v1/testruns/47428/",
                runBy: "testrun-47428",
                startTime: "2014-04-01T10:23:46Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 5,
                    module: "d007_alta_top",
                    name: "sim_mm_10_adc_temp_diode_test",
                    resourceUri: "/api/v1/testcases/5/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:27:45Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41039
            },
            {
                status: 1,
                testrunId: 32807
            },
            {
                status: 1,
                testrunId: 30455
            }
            ],
            id: 5413,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5413/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:29:04Z",
                history: "000000010",
                id: 47429,
                resourceUri: "/api/v1/testruns/47429/",
                runBy: "testrun-47429",
                startTime: "2014-04-01T10:25:13Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 6,
                    module: "d007_alta_top",
                    name: "sim_mm_11_bod_em2_test",
                    resourceUri: "/api/v1/testcases/6/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:29:04Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41040
            },
            {
                status: 1,
                testrunId: 32808
            },
            {
                status: 1,
                testrunId: 30456
            }
            ],
            id: 5414,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5414/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:31:36Z",
                history: "000000010",
                id: 47430,
                resourceUri: "/api/v1/testruns/47430/",
                runBy: "testrun-47430",
                startTime: "2014-04-01T10:27:47Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 7,
                    module: "d007_alta_top",
                    name: "sim_mm_12_bod_external_threshold_test",
                    resourceUri: "/api/v1/testcases/7/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:31:36Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 0,
                testrunId: 41041
            },
            {
                status: 1,
                testrunId: 32809
            },
            {
                status: 1,
                testrunId: 30457
            }
            ],
            id: 5415,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5415/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:33:14Z",
                history: "000000010",
                id: 47431,
                resourceUri: "/api/v1/testruns/47431/",
                runBy: "testrun-47431",
                startTime: "2014-04-01T10:29:06Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 8,
                    module: "d007_alta_top",
                    name: "sim_mm_13_bod_external_threshold_slow_test",
                    resourceUri: "/api/v1/testcases/8/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:33:14Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41042
            },
            {
                status: 1,
                testrunId: 32810
            },
            {
                status: 1,
                testrunId: 30458
            }
            ],
            id: 5416,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5416/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:35:16Z",
                history: "000000010",
                id: 47432,
                resourceUri: "/api/v1/testruns/47432/",
                runBy: "testrun-47432",
                startTime: "2014-04-01T10:31:38Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 9,
                    module: "d007_alta_top",
                    name: "sim_mm_14_bod_internal_threshold_test",
                    resourceUri: "/api/v1/testcases/9/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:35:16Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41058
            },
            {
                status: 1,
                testrunId: 32826
            },
            {
                status: 1,
                testrunId: 30474
            }
            ],
            id: 5417,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5417/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:36:49Z",
                history: "000000010",
                id: 47448,
                resourceUri: "/api/v1/testruns/47448/",
                runBy: "testrun-47448",
                startTime: "2014-04-01T10:33:16Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 25,
                    module: "d007_alta_top",
                    name: "sim_mm_2_em2_test",
                    resourceUri: "/api/v1/testcases/25/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:36:49Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41067
            },
            {
                status: 1,
                testrunId: 32835
            },
            {
                status: 1,
                testrunId: 30483
            }
            ],
            id: 5418,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5418/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:39:14Z",
                history: "000000010",
                id: 47457,
                resourceUri: "/api/v1/testruns/47457/",
                runBy: "testrun-47457",
                startTime: "2014-04-01T10:35:19Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 34,
                    module: "d007_alta_top",
                    name: "sim_mm_38_em0_current_test",
                    resourceUri: "/api/v1/testcases/34/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:39:14Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41068
            },
            {
                status: 1,
                testrunId: 32836
            },
            {
                status: 1,
                testrunId: 30484
            }
            ],
            id: 5419,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5419/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:40:33Z",
                history: "000000010",
                id: 47458,
                resourceUri: "/api/v1/testruns/47458/",
                runBy: "testrun-47458",
                startTime: "2014-04-01T10:36:51Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 35,
                    module: "d007_alta_top",
                    name: "sim_mm_39_em1_current_test",
                    resourceUri: "/api/v1/testcases/35/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:40:33Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41069
            },
            {
                status: 1,
                testrunId: 32837
            },
            {
                status: 1,
                testrunId: 30485
            }
            ],
            id: 5420,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5420/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:43:20Z",
                history: "000000010",
                id: 47459,
                resourceUri: "/api/v1/testruns/47459/",
                runBy: "testrun-47459",
                startTime: "2014-04-01T10:39:17Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 36,
                    module: "d007_alta_top",
                    name: "sim_mm_3_acmp_functionality_all_refs_test",
                    resourceUri: "/api/v1/testcases/36/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:43:20Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41070
            },
            {
                status: 1,
                testrunId: 32838
            },
            {
                status: 1,
                testrunId: 30486
            }
            ],
            id: 5421,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5421/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:44:05Z",
                history: "000000010",
                id: 47460,
                resourceUri: "/api/v1/testruns/47460/",
                runBy: "testrun-47460",
                startTime: "2014-04-01T10:40:35Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 37,
                    module: "d007_alta_top",
                    name: "sim_mm_40_lfrco_em2_em0_test",
                    resourceUri: "/api/v1/testcases/37/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:44:05Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41071
            },
            {
                status: 1,
                testrunId: 32839
            },
            {
                status: 1,
                testrunId: 30487
            }
            ],
            id: 5422,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5422/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:47:16Z",
                history: "000000010",
                id: 47461,
                resourceUri: "/api/v1/testruns/47461/",
                runBy: "testrun-47461",
                startTime: "2014-04-01T10:43:22Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 38,
                    module: "d007_alta_top",
                    name: "sim_mm_41_oscillator_start_up_test",
                    resourceUri: "/api/v1/testcases/38/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:47:17Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41072
            },
            {
                status: 1,
                testrunId: 32840
            },
            {
                status: 1,
                testrunId: 30488
            }
            ],
            id: 5423,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5423/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:48:04Z",
                history: "000000010",
                id: 47462,
                resourceUri: "/api/v1/testruns/47462/",
                runBy: "testrun-47462",
                startTime: "2014-04-01T10:44:07Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 39,
                    module: "d007_alta_top",
                    name: "sim_mm_42_tm_entry_exit_test",
                    resourceUri: "/api/v1/testcases/39/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:48:05Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41073
            },
            {
                status: 1,
                testrunId: 32841
            },
            {
                status: 1,
                testrunId: 30489
            }
            ],
            id: 5424,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5424/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:52:37Z",
                history: "000000010",
                id: 47463,
                resourceUri: "/api/v1/testruns/47463/",
                runBy: "testrun-47463",
                startTime: "2014-04-01T10:47:19Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 40,
                    module: "d007_alta_top",
                    name: "sim_mm_44_vcmp_functionality_all_refs_test",
                    resourceUri: "/api/v1/testcases/40/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:52:37Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41074
            },
            {
                status: 1,
                testrunId: 32842
            },
            {
                status: 1,
                testrunId: 30490
            }
            ],
            id: 5425,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5425/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:20:59Z",
                history: "000000010",
                id: 47464,
                resourceUri: "/api/v1/testruns/47464/",
                runBy: "testrun-47464",
                startTime: "2014-04-01T10:16:35Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 41,
                    module: "d007_alta_top",
                    name: "sim_mm_45_vcmp_current_test",
                    resourceUri: "/api/v1/testcases/41/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:20:59Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41075
            },
            {
                status: 1,
                testrunId: 32843
            },
            {
                status: 1,
                testrunId: 30491
            }
            ],
            id: 5426,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5426/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:53:18Z",
                history: "000000010",
                id: 47465,
                resourceUri: "/api/v1/testruns/47465/",
                runBy: "testrun-47465",
                startTime: "2014-04-01T10:48:06Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 42,
                    module: "d007_alta_top",
                    name: "sim_mm_46_em4_current_test",
                    resourceUri: "/api/v1/testcases/42/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:53:18Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41076
            },
            {
                status: 1,
                testrunId: 32844
            },
            {
                status: 1,
                testrunId: 30492
            }
            ],
            id: 5427,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5427/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:56:25Z",
                history: "000000010",
                id: 47466,
                resourceUri: "/api/v1/testruns/47466/",
                runBy: "testrun-47466",
                startTime: "2014-04-01T10:52:39Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 43,
                    module: "d007_alta_top",
                    name: "sim_mm_47_em4_entry_exit_test",
                    resourceUri: "/api/v1/testcases/43/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:56:25Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41077
            },
            {
                status: 1,
                testrunId: 32845
            },
            {
                status: 1,
                testrunId: 30493
            }
            ],
            id: 5428,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5428/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T10:57:04Z",
                history: "000000010",
                id: 47467,
                resourceUri: "/api/v1/testruns/47467/",
                runBy: "testrun-47467",
                startTime: "2014-04-01T10:53:19Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 44,
                    module: "d007_alta_top",
                    name: "sim_mm_48_gmc_calibration_test",
                    resourceUri: "/api/v1/testcases/44/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T10:57:04Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41078
            },
            {
                status: 1,
                testrunId: 32846
            },
            {
                status: 1,
                testrunId: 30494
            }
            ],
            id: 5429,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5429/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T11:00:10Z",
                history: "000000010",
                id: 47468,
                resourceUri: "/api/v1/testruns/47468/",
                runBy: "testrun-47468",
                startTime: "2014-04-01T10:56:27Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 45,
                    module: "d007_alta_top",
                    name: "sim_mm_49_hfrco_em2_em0_test",
                    resourceUri: "/api/v1/testcases/45/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:00:10Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41079
            },
            {
                status: 1,
                testrunId: 32847
            },
            {
                status: 1,
                testrunId: 30495
            }
            ],
            id: 5430,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5430/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T11:01:03Z",
                history: "000000010",
                id: 47469,
                resourceUri: "/api/v1/testruns/47469/",
                runBy: "testrun-47469",
                startTime: "2014-04-01T10:57:05Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 46,
                    module: "d007_alta_top",
                    name: "sim_mm_4_acmp_current_test",
                    resourceUri: "/api/v1/testcases/46/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:01:03Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41080
            },
            {
                status: 1,
                testrunId: 32848
            },
            {
                status: 1,
                testrunId: 30496
            }
            ],
            id: 5431,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5431/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T11:03:49Z",
                history: "000000010",
                id: 47470,
                resourceUri: "/api/v1/testruns/47470/",
                runBy: "testrun-47470",
                startTime: "2014-04-01T11:00:12Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 47,
                    module: "d007_alta_top",
                    name: "sim_mm_50_em2_current_test",
                    resourceUri: "/api/v1/testcases/47/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:03:49Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41081
            },
            {
                status: 1,
                testrunId: 32849
            },
            {
                status: 1,
                testrunId: 30497
            }
            ],
            id: 5432,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5432/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T11:04:29Z",
                history: "000000010",
                id: 47471,
                resourceUri: "/api/v1/testruns/47471/",
                runBy: "testrun-47471",
                startTime: "2014-04-01T11:01:04Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 48,
                    module: "d007_alta_top",
                    name: "sim_mm_51_em2_entry_exit_test",
                    resourceUri: "/api/v1/testcases/48/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:04:29Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:10Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41082
            },
            {
                status: 1,
                testrunId: 32850
            },
            {
                status: 1,
                testrunId: 30498
            }
            ],
            id: 5433,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5433/",
            testRun: {
                created: "2014-04-01T10:16:10Z",
                endTime: "2014-04-01T11:07:43Z",
                history: "000000010",
                id: 47472,
                resourceUri: "/api/v1/testruns/47472/",
                runBy: "testrun-47472",
                startTime: "2014-04-01T11:03:51Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 49,
                    module: "d007_alta_top",
                    name: "sim_mm_52_em2_entry_exit_gpio_test",
                    resourceUri: "/api/v1/testcases/49/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:07:43Z"
            },
            updated: "2014-04-01T10:16:10Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41083
            },
            {
                status: 1,
                testrunId: 32851
            },
            {
                status: 1,
                testrunId: 30499
            }
            ],
            id: 5434,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5434/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:08:24Z",
                history: "000000010",
                id: 47473,
                resourceUri: "/api/v1/testruns/47473/",
                runBy: "testrun-47473",
                startTime: "2014-04-01T11:04:31Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 50,
                    module: "d007_alta_top",
                    name: "sim_mm_54_em3_current_test",
                    resourceUri: "/api/v1/testcases/50/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:08:24Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41084
            },
            {
                status: 1,
                testrunId: 32852
            },
            {
                status: 1,
                testrunId: 30500
            }
            ],
            id: 5435,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5435/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:11:41Z",
                history: "000000010",
                id: 47474,
                resourceUri: "/api/v1/testruns/47474/",
                runBy: "testrun-47474",
                startTime: "2014-04-01T11:07:45Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 51,
                    module: "d007_alta_top",
                    name: "sim_mm_55_em3_entry_exit_test",
                    resourceUri: "/api/v1/testcases/51/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:11:41Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41086
            },
            {
                status: 1,
                testrunId: 32854
            },
            {
                status: 1,
                testrunId: 30502
            }
            ],
            id: 5436,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5436/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:12:16Z",
                history: "000000010",
                id: 47476,
                resourceUri: "/api/v1/testruns/47476/",
                runBy: "testrun-47476",
                startTime: "2014-04-01T11:08:26Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 53,
                    module: "d007_alta_top",
                    name: "sim_mm_57_fw_extend_test",
                    resourceUri: "/api/v1/testcases/53/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:12:16Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41089
            },
            {
                status: 1,
                testrunId: 32857
            },
            {
                status: 1,
                testrunId: 30505
            }
            ],
            id: 5437,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5437/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:15:57Z",
                history: "000000010",
                id: 47479,
                resourceUri: "/api/v1/testruns/47479/",
                runBy: "testrun-47479",
                startTime: "2014-04-01T11:11:43Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 56,
                    module: "d007_alta_top",
                    name: "sim_mm_5_adc_power_down_current_test",
                    resourceUri: "/api/v1/testcases/56/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:15:57Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41090
            },
            {
                status: 1,
                testrunId: 32858
            },
            {
                status: 1,
                testrunId: 30506
            }
            ],
            id: 5438,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5438/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:16:36Z",
                history: "000000010",
                id: 47480,
                resourceUri: "/api/v1/testruns/47480/",
                runBy: "testrun-47480",
                startTime: "2014-04-01T11:12:18Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 57,
                    module: "d007_alta_top",
                    name: "sim_mm_60_power_sequence_test",
                    resourceUri: "/api/v1/testcases/57/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:16:36Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41091
            },
            {
                status: 1,
                testrunId: 32859
            },
            {
                status: 1,
                testrunId: 30507
            }
            ],
            id: 5439,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5439/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:19:32Z",
                history: "000000010",
                id: 47481,
                resourceUri: "/api/v1/testruns/47481/",
                runBy: "testrun-47481",
                startTime: "2014-04-01T11:15:59Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 58,
                    module: "d007_alta_top",
                    name: "sim_mm_61_power_sequence_test",
                    resourceUri: "/api/v1/testcases/58/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:19:32Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41092
            },
            {
                status: 1,
                testrunId: 32860
            },
            {
                status: 1,
                testrunId: 30508
            }
            ],
            id: 5440,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5440/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:20:31Z",
                history: "000000010",
                id: 47482,
                resourceUri: "/api/v1/testruns/47482/",
                runBy: "testrun-47482",
                startTime: "2014-04-01T11:16:37Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 59,
                    module: "d007_alta_top",
                    name: "sim_mm_62_internal_bod_cal_test",
                    resourceUri: "/api/v1/testcases/59/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:20:31Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41093
            },
            {
                status: 1,
                testrunId: 32861
            },
            {
                status: 1,
                testrunId: 30509
            }
            ],
            id: 5441,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5441/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:23:13Z",
                history: "000000010",
                id: 47483,
                resourceUri: "/api/v1/testruns/47483/",
                runBy: "testrun-47483",
                startTime: "2014-04-01T11:19:34Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 60,
                    module: "d007_alta_top",
                    name: "sim_mm_63_bod_external_threshold_avdd_test",
                    resourceUri: "/api/v1/testcases/60/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:23:13Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41094
            },
            {
                status: 1,
                testrunId: 32862
            },
            {
                status: 1,
                testrunId: 30510
            }
            ],
            id: 5442,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5442/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:24:09Z",
                history: "000000010",
                id: 47484,
                resourceUri: "/api/v1/testruns/47484/",
                runBy: "testrun-47484",
                startTime: "2014-04-01T11:20:33Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 61,
                    module: "d007_alta_top",
                    name: "sim_mm_64_em4_wu_current_test",
                    resourceUri: "/api/v1/testcases/61/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:24:09Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41097
            },
            {
                status: 1,
                testrunId: 32865
            },
            {
                status: 1,
                testrunId: 30513
            }
            ],
            id: 5443,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5443/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:27:11Z",
                history: "000000010",
                id: 47487,
                resourceUri: "/api/v1/testruns/47487/",
                runBy: "testrun-47487",
                startTime: "2014-04-01T11:23:16Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 64,
                    module: "d007_alta_top",
                    name: "sim_mm_67_extern_regulator_test",
                    resourceUri: "/api/v1/testcases/64/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:27:11Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 3,
                testrunId: 41098
            },
            {
                status: 3,
                testrunId: 32866
            },
            {
                status: 3,
                testrunId: 30514
            }
            ],
            id: 5444,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5444/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:27:47Z",
                history: "000000030",
                id: 47488,
                resourceUri: "/api/v1/testruns/47488/",
                runBy: "testrun-47488",
                startTime: "2014-04-01T11:24:10Z",
                status: 3,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 65,
                    module: "d007_alta_top",
                    name: "sim_mm_68_em4_tm_test",
                    resourceUri: "/api/v1/testcases/65/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:27:47Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41100
            },
            {
                status: 1,
                testrunId: 32868
            },
            {
                status: 1,
                testrunId: 30516
            }
            ],
            id: 5445,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5445/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:30:48Z",
                history: "000000010",
                id: 47490,
                resourceUri: "/api/v1/testruns/47490/",
                runBy: "testrun-47490",
                startTime: "2014-04-01T11:27:13Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 67,
                    module: "d007_alta_top",
                    name: "sim_mm_6_adc_2_ref_start_up_snr_test",
                    resourceUri: "/api/v1/testcases/67/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:30:48Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41109
            },
            {
                status: 1,
                testrunId: 32877
            },
            {
                status: 1,
                testrunId: 30525
            }
            ],
            id: 5446,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5446/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:31:36Z",
                history: "000000010",
                id: 47499,
                resourceUri: "/api/v1/testruns/47499/",
                runBy: "testrun-47499",
                startTime: "2014-04-01T11:27:49Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 76,
                    module: "d007_alta_top",
                    name: "sim_mm_7_adc_functional_sequencing_test",
                    resourceUri: "/api/v1/testcases/76/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:31:36Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41114
            },
            {
                status: 1,
                testrunId: 32882
            },
            {
                status: 1,
                testrunId: 30530
            }
            ],
            id: 5447,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5447/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:34:52Z",
                history: "000000010",
                id: 47504,
                resourceUri: "/api/v1/testruns/47504/",
                runBy: "testrun-47504",
                startTime: "2014-04-01T11:30:50Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 81,
                    module: "d007_alta_top",
                    name: "sim_mm_84_revision_test",
                    resourceUri: "/api/v1/testcases/81/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:34:52Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41115
            },
            {
                status: 1,
                testrunId: 32883
            },
            {
                status: 1,
                testrunId: 30531
            }
            ],
            id: 5448,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5448/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:35:41Z",
                history: "000000010",
                id: 47505,
                resourceUri: "/api/v1/testruns/47505/",
                runBy: "testrun-47505",
                startTime: "2014-04-01T11:31:38Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 82,
                    module: "d007_alta_top",
                    name: "sim_mm_85_idac_em2_test",
                    resourceUri: "/api/v1/testcases/82/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:35:42Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41116
            },
            {
                status: 1,
                testrunId: 32884
            },
            {
                status: 1,
                testrunId: 30532
            }
            ],
            id: 5449,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5449/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:38:28Z",
                history: "000000010",
                id: 47506,
                resourceUri: "/api/v1/testruns/47506/",
                runBy: "testrun-47506",
                startTime: "2014-04-01T11:34:54Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 83,
                    module: "d007_alta_top",
                    name: "sim_mm_86_idac_test",
                    resourceUri: "/api/v1/testcases/83/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:38:28Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41117
            },
            {
                status: 1,
                testrunId: 32885
            },
            {
                status: 1,
                testrunId: 30533
            }
            ],
            id: 5450,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5450/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:39:36Z",
                history: "000000010",
                id: 47507,
                resourceUri: "/api/v1/testruns/47507/",
                runBy: "testrun-47507",
                startTime: "2014-04-01T11:35:43Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 84,
                    module: "d007_alta_top",
                    name: "sim_mm_87_idac_adc_test",
                    resourceUri: "/api/v1/testcases/84/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:39:36Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41118
            },
            {
                status: 1,
                testrunId: 32886
            },
            {
                status: 1,
                testrunId: 30534
            }
            ],
            id: 5451,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5451/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:42:21Z",
                history: "000000010",
                id: 47508,
                resourceUri: "/api/v1/testruns/47508/",
                runBy: "testrun-47508",
                startTime: "2014-04-01T11:38:30Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 85,
                    module: "d007_alta_top",
                    name: "sim_mm_8_adc_5_ref_start_up_snr_test",
                    resourceUri: "/api/v1/testcases/85/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:42:21Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41120
            },
            {
                status: 1,
                testrunId: 32888
            },
            {
                status: 1,
                testrunId: 30536
            }
            ],
            id: 5452,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5452/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:43:26Z",
                history: "000000010",
                id: 47510,
                resourceUri: "/api/v1/testruns/47510/",
                runBy: "testrun-47510",
                startTime: "2014-04-01T11:39:38Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 87,
                    module: "d007_alta_top",
                    name: "sim_mm_9_adc_7_ref_start_up_snr_test",
                    resourceUri: "/api/v1/testcases/87/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:43:26Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 3,
                testrunId: 41121
            },
            {
                status: 3,
                testrunId: 32889
            },
            {
                status: 3,
                testrunId: 30537
            }
            ],
            id: 5453,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5453/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:46:14Z",
                history: "000000030",
                id: 47511,
                resourceUri: "/api/v1/testruns/47511/",
                runBy: "testrun-47511",
                startTime: "2014-04-01T11:42:23Z",
                status: 3,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 88,
                    module: "d007_alta_top",
                    name: "sim_scan_test_alt_pinmode",
                    resourceUri: "/api/v1/testcases/88/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:46:14Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 3,
                testrunId: 41122
            },
            {
                status: 3,
                testrunId: 32890
            },
            {
                status: 3,
                testrunId: 30538
            }
            ],
            id: 5454,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5454/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:47:08Z",
                history: "000000030",
                id: 47512,
                resourceUri: "/api/v1/testruns/47512/",
                runBy: "testrun-47512",
                startTime: "2014-04-01T11:43:29Z",
                status: 3,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 89,
                    module: "d007_alta_top",
                    name: "sim_scan_test",
                    resourceUri: "/api/v1/testcases/89/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:47:08Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41123
            },
            {
                status: 1,
                testrunId: 32891
            },
            {
                status: 1,
                testrunId: 30539
            }
            ],
            id: 5455,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5455/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:49:54Z",
                history: "000000010",
                id: 47513,
                resourceUri: "/api/v1/testruns/47513/",
                runBy: "testrun-47513",
                startTime: "2014-04-01T11:46:16Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:25Z",
                    id: 90,
                    module: "d007_alta_top",
                    name: "sim_tc_100_revc_timer_pwm_test",
                    resourceUri: "/api/v1/testcases/90/",
                    updated: "2014-02-28T09:06:25Z"
                },
                updated: "2014-04-01T11:49:54Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41124
            },
            {
                status: 1,
                testrunId: 32892
            },
            {
                status: 1,
                testrunId: 30540
            }
            ],
            id: 5456,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5456/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-03T22:31:48Z",
                history: "",
                id: 47514,
                resourceUri: "/api/v1/testruns/47514/",
                runBy: "testrun-47514",
                startTime: "2014-04-03T22:26:19Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 91,
                    module: "d007_alta_top",
                    name: "sim_tc_101_revc_hfrco_vreg_glitch_supresser_test",
                    resourceUri: "/api/v1/testcases/91/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-03T22:31:48Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41126
            },
            {
                status: 1,
                testrunId: 32894
            },
            {
                status: 1,
                testrunId: 30542
            }
            ],
            id: 5457,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5457/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T14:23:53Z",
                history: "000000010",
                id: 47516,
                resourceUri: "/api/v1/testruns/47516/",
                runBy: "testrun-47516",
                startTime: "2014-04-01T14:10:30Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 93,
                    module: "d007_alta_top",
                    name: "sim_tc_103_pcnt_8bit_test",
                    resourceUri: "/api/v1/testcases/93/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T14:23:53Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41127
            },
            {
                status: 1,
                testrunId: 32895
            },
            {
                status: 1,
                testrunId: 30543
            }
            ],
            id: 5458,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5458/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T12:09:53Z",
                history: "000000010",
                id: 47517,
                resourceUri: "/api/v1/testruns/47517/",
                runBy: "testrun-47517",
                startTime: "2014-04-01T12:06:07Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 94,
                    module: "d007_alta_top",
                    name: "sim_tc_104_revc_i2c_sleep_test",
                    resourceUri: "/api/v1/testcases/94/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T12:09:53Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41128
            },
            {
                status: 1,
                testrunId: 32896
            },
            {
                status: 1,
                testrunId: 30544
            }
            ],
            id: 5459,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5459/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:51:09Z",
                history: "000000010",
                id: 47518,
                resourceUri: "/api/v1/testruns/47518/",
                runBy: "testrun-47518",
                startTime: "2014-04-01T11:47:10Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 95,
                    module: "d007_alta_top",
                    name: "sim_tc_105_revc_flash_prog_reset_wakeup_test",
                    resourceUri: "/api/v1/testcases/95/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T11:51:09Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41129
            },
            {
                status: 1,
                testrunId: 32897
            },
            {
                status: 1,
                testrunId: 30545
            }
            ],
            id: 5460,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5460/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:53:51Z",
                history: "000000010",
                id: 47519,
                resourceUri: "/api/v1/testruns/47519/",
                runBy: "testrun-47519",
                startTime: "2014-04-01T11:49:56Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 96,
                    module: "d007_alta_top",
                    name: "sim_tc_106_revc_usart_output_delay_test",
                    resourceUri: "/api/v1/testcases/96/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T11:53:51Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41130
            },
            {
                status: 1,
                testrunId: 32898
            },
            {
                status: 1,
                testrunId: 30546
            }
            ],
            id: 5461,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5461/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:55:24Z",
                history: "000000010",
                id: 47520,
                resourceUri: "/api/v1/testruns/47520/",
                runBy: "testrun-47520",
                startTime: "2014-04-01T11:51:11Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 97,
                    module: "d007_alta_top",
                    name: "sim_tc_107_leuart_false_rxof_test",
                    resourceUri: "/api/v1/testcases/97/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T11:55:24Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41131
            },
            {
                status: 1,
                testrunId: 32899
            },
            {
                status: 1,
                testrunId: 30547
            }
            ],
            id: 5462,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5462/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:57:30Z",
                history: "000000010",
                id: 47521,
                resourceUri: "/api/v1/testruns/47521/",
                runBy: "testrun-47521",
                startTime: "2014-04-01T11:53:53Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 98,
                    module: "d007_alta_top",
                    name: "sim_tc_108_revc_bod_calib_test",
                    resourceUri: "/api/v1/testcases/98/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T11:57:30Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41132
            },
            {
                status: 1,
                testrunId: 32900
            },
            {
                status: 1,
                testrunId: 30548
            }
            ],
            id: 5463,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5463/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T11:59:53Z",
                history: "000000010",
                id: 47522,
                resourceUri: "/api/v1/testruns/47522/",
                runBy: "testrun-47522",
                startTime: "2014-04-01T11:55:26Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 99,
                    module: "d007_alta_top",
                    name: "sim_tc_109_uart_false_rxof_test",
                    resourceUri: "/api/v1/testcases/99/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T11:59:53Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:11Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41134
            },
            {
                status: 1,
                testrunId: 32902
            },
            {
                status: 1,
                testrunId: 30550
            }
            ],
            id: 5464,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5464/",
            testRun: {
                created: "2014-04-01T10:16:11Z",
                endTime: "2014-04-01T12:06:04Z",
                history: "000000010",
                id: 47524,
                resourceUri: "/api/v1/testruns/47524/",
                runBy: "testrun-47524",
                startTime: "2014-04-01T11:57:32Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 101,
                    module: "d007_alta_top",
                    name: "sim_tc_110_balla_imemchanges",
                    resourceUri: "/api/v1/testcases/101/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T12:06:05Z"
            },
            updated: "2014-04-01T10:16:11Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41135
            },
            {
                status: 1,
                testrunId: 32903
            },
            {
                status: 1,
                testrunId: 30551
            }
            ],
            id: 5465,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5465/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T12:06:45Z",
                history: "000000010",
                id: 47525,
                resourceUri: "/api/v1/testruns/47525/",
                runBy: "testrun-47525",
                startTime: "2014-04-01T11:59:56Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 102,
                    module: "d007_alta_top",
                    name: "sim_tc_111_aes_endianfix",
                    resourceUri: "/api/v1/testcases/102/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T12:06:45Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41136
            },
            {
                status: 2,
                testrunId: 32904
            },
            {
                status: 2,
                testrunId: 30552
            }
            ],
            id: 5466,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5466/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T12:11:09Z",
                history: "000000020",
                id: 47526,
                resourceUri: "/api/v1/testruns/47526/",
                runBy: "testrun-47526",
                startTime: "2014-04-01T12:06:46Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 103,
                    module: "d007_alta_top",
                    name: "sim_tc_112_ram_param_test",
                    resourceUri: "/api/v1/testcases/103/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T12:11:09Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41137
            },
            {
                status: 1,
                testrunId: 32905
            },
            {
                status: 1,
                testrunId: 30553
            }
            ],
            id: 5467,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5467/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T12:13:45Z",
                history: "000000010",
                id: 47527,
                resourceUri: "/api/v1/testruns/47527/",
                runBy: "testrun-47527",
                startTime: "2014-04-01T12:09:56Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 104,
                    module: "d007_alta_top",
                    name: "sim_tc_113_cmu_clocks_disabled_after_reset",
                    resourceUri: "/api/v1/testcases/104/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T12:13:45Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41138
            },
            {
                status: 2,
                testrunId: 32906
            },
            {
                status: 2,
                testrunId: 30554
            }
            ],
            id: 5468,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5468/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T12:15:44Z",
                history: "000000020",
                id: 47528,
                resourceUri: "/api/v1/testruns/47528/",
                runBy: "testrun-47528",
                startTime: "2014-04-01T12:11:12Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 105,
                    module: "d007_alta_top",
                    name: "sim_tc_114_mass_erase_during_reset",
                    resourceUri: "/api/v1/testcases/105/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T12:15:44Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41139
            },
            {
                status: 1,
                testrunId: 32907
            },
            {
                status: 1,
                testrunId: 30555
            }
            ],
            id: 5469,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5469/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T12:18:03Z",
                history: "000000010",
                id: 47529,
                resourceUri: "/api/v1/testruns/47529/",
                runBy: "testrun-47529",
                startTime: "2014-04-01T12:13:47Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 106,
                    module: "d007_alta_top",
                    name: "sim_tc_115_refcell_erase",
                    resourceUri: "/api/v1/testcases/106/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T12:18:03Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41140
            },
            {
                status: 1,
                testrunId: 32908
            },
            {
                status: 1,
                testrunId: 30556
            }
            ],
            id: 5470,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5470/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T12:19:33Z",
                history: "000000010",
                id: 47530,
                resourceUri: "/api/v1/testruns/47530/",
                runBy: "testrun-47530",
                startTime: "2014-04-01T12:15:46Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 107,
                    module: "d007_alta_top",
                    name: "sim_tc_116_cmu_clkout_locations_test",
                    resourceUri: "/api/v1/testcases/107/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T12:19:33Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41141
            },
            {
                status: 2,
                testrunId: 32909
            },
            {
                status: 2,
                testrunId: 30557
            }
            ],
            id: 5471,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5471/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T12:22:00Z",
                history: "000000020",
                id: 47531,
                resourceUri: "/api/v1/testruns/47531/",
                runBy: "testrun-47531",
                startTime: "2014-04-01T12:18:05Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 108,
                    module: "d007_alta_top",
                    name: "sim_tc_117_prs_async_test",
                    resourceUri: "/api/v1/testcases/108/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T12:22:00Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41142
            },
            {
                status: 1,
                testrunId: 32910
            },
            {
                status: 1,
                testrunId: 30558
            }
            ],
            id: 5472,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5472/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T12:24:37Z",
                history: "000000010",
                id: 47532,
                resourceUri: "/api/v1/testruns/47532/",
                runBy: "testrun-47532",
                startTime: "2014-04-01T12:19:36Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 109,
                    module: "d007_alta_top",
                    name: "sim_tc_118_pcnt_16bit_test",
                    resourceUri: "/api/v1/testcases/109/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T12:24:37Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41144
            },
            {
                status: 1,
                testrunId: 32912
            },
            {
                status: 1,
                testrunId: 30560
            }
            ],
            id: 5473,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5473/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T12:26:21Z",
                history: "000000010",
                id: 47534,
                resourceUri: "/api/v1/testruns/47534/",
                runBy: "testrun-47534",
                startTime: "2014-04-01T12:22:02Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 111,
                    module: "d007_alta_top",
                    name: "sim_tc_11_leuart_test",
                    resourceUri: "/api/v1/testcases/111/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T12:26:21Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41146
            },
            {
                status: 1,
                testrunId: 32914
            },
            {
                status: 1,
                testrunId: 30562
            }
            ],
            id: 5474,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5474/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T14:10:26Z",
                history: "000000010",
                id: 47536,
                resourceUri: "/api/v1/testruns/47536/",
                runBy: "testrun-47536",
                startTime: "2014-04-01T12:24:39Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 113,
                    module: "d007_alta_top",
                    name: "sim_tc_121_icache_test",
                    resourceUri: "/api/v1/testcases/113/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T14:10:27Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41147
            },
            {
                status: 1,
                testrunId: 32915
            },
            {
                status: 1,
                testrunId: 30563
            }
            ],
            id: 5475,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5475/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T14:21:37Z",
                history: "000000010",
                id: 47537,
                resourceUri: "/api/v1/testruns/47537/",
                runBy: "testrun-47537",
                startTime: "2014-04-01T12:26:24Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 114,
                    module: "d007_alta_top",
                    name: "sim_tc_122_i2s_test",
                    resourceUri: "/api/v1/testcases/114/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T14:21:37Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41149
            },
            {
                status: 1,
                testrunId: 32917
            },
            {
                status: 1,
                testrunId: 30565
            }
            ],
            id: 5476,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5476/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T14:26:14Z",
                history: "000000010",
                id: 47539,
                resourceUri: "/api/v1/testruns/47539/",
                runBy: "testrun-47539",
                startTime: "2014-04-01T14:21:39Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 116,
                    module: "d007_alta_top",
                    name: "sim_tc_124_pcnt_reset_test",
                    resourceUri: "/api/v1/testcases/116/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T14:26:14Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41150
            },
            {
                status: 1,
                testrunId: 32918
            },
            {
                status: 1,
                testrunId: 30566
            }
            ],
            id: 5477,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5477/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T14:28:18Z",
                history: "000000010",
                id: 47540,
                resourceUri: "/api/v1/testruns/47540/",
                runBy: "testrun-47540",
                startTime: "2014-04-01T14:23:55Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 117,
                    module: "d007_alta_top",
                    name: "sim_tc_125_letimer_rtc_direct_write_test",
                    resourceUri: "/api/v1/testcases/117/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T14:28:18Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41151
            },
            {
                status: 1,
                testrunId: 32919
            },
            {
                status: 1,
                testrunId: 30567
            }
            ],
            id: 5478,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5478/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T14:31:30Z",
                history: "000000010",
                id: 47541,
                resourceUri: "/api/v1/testruns/47541/",
                runBy: "testrun-47541",
                startTime: "2014-04-01T14:26:16Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 118,
                    module: "d007_alta_top",
                    name: "sim_tc_126_rtc_cnt_split_test",
                    resourceUri: "/api/v1/testcases/118/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T14:31:30Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41152
            },
            {
                status: 1,
                testrunId: 32920
            },
            {
                status: 1,
                testrunId: 30568
            }
            ],
            id: 5479,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5479/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T14:33:06Z",
                history: "000000010",
                id: 47542,
                resourceUri: "/api/v1/testruns/47542/",
                runBy: "testrun-47542",
                startTime: "2014-04-01T14:28:20Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 119,
                    module: "d007_alta_top",
                    name: "sim_tc_127_coreif_test",
                    resourceUri: "/api/v1/testcases/119/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T14:33:06Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41153
            },
            {
                status: 1,
                testrunId: 32921
            },
            {
                status: 1,
                testrunId: 30569
            }
            ],
            id: 5480,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5480/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-01T14:36:07Z",
                history: "000000010",
                id: 47543,
                resourceUri: "/api/v1/testruns/47543/",
                runBy: "testrun-47543",
                startTime: "2014-04-01T14:31:32Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 120,
                    module: "d007_alta_top",
                    name: "sim_tc_128_lewsync_test",
                    resourceUri: "/api/v1/testcases/120/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-01T14:36:07Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41154
            },
            {
                status: 1,
                testrunId: 32922
            },
            {
                status: 1,
                testrunId: 30570
            }
            ],
            id: 5481,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5481/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-04T16:12:34Z",
                history: "000000010",
                id: 47544,
                resourceUri: "/api/v1/testruns/47544/",
                runBy: "testrun-47544",
                startTime: "2014-04-04T14:08:42Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 121,
                    module: "d007_alta_top",
                    name: "sim_tc_129_cmu_cal_test",
                    resourceUri: "/api/v1/testcases/121/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-04T16:12:34Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41156
            },
            {
                status: 1,
                testrunId: 32924
            },
            {
                status: 1,
                testrunId: 30572
            }
            ],
            id: 5482,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5482/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-04T16:13:26Z",
                history: "000000010",
                id: 47546,
                resourceUri: "/api/v1/testruns/47546/",
                runBy: "testrun-47546",
                startTime: "2014-04-04T14:37:30Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 123,
                    module: "d007_alta_top",
                    name: "sim_tc_130_i2c_dis_test",
                    resourceUri: "/api/v1/testcases/123/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-04T16:13:26Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41157
            },
            {
                status: 1,
                testrunId: 32925
            },
            {
                status: 1,
                testrunId: 30573
            }
            ],
            id: 5483,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5483/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-03T15:02:57Z",
                history: "",
                id: 47547,
                resourceUri: "/api/v1/testruns/47547/",
                runBy: "testrun-47547",
                startTime: "2014-04-03T14:43:38Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 124,
                    module: "d007_alta_top",
                    name: "sim_tc_131_imem_timebase",
                    resourceUri: "/api/v1/testcases/124/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-03T15:02:57Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41158
            },
            {
                status: 1,
                testrunId: 32926
            },
            {
                status: 1,
                testrunId: 30574
            }
            ],
            id: 5484,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5484/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-03T07:35:32Z",
                history: "000000010",
                id: 47548,
                resourceUri: "/api/v1/testruns/47548/",
                runBy: "testrun-47548",
                startTime: "2014-04-03T07:30:33Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 125,
                    module: "d007_alta_top",
                    name: "sim_tc_132_imem_write_timeout",
                    resourceUri: "/api/v1/testcases/125/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-03T07:35:32Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41159
            },
            {
                status: 1,
                testrunId: 32927
            },
            {
                status: 1,
                testrunId: 30575
            }
            ],
            id: 5485,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5485/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-03T07:43:00Z",
                history: "000000010",
                id: 47549,
                resourceUri: "/api/v1/testruns/47549/",
                runBy: "testrun-47549",
                startTime: "2014-04-03T07:35:05Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 126,
                    module: "d007_alta_top",
                    name: "sim_tc_133_lesync_stress",
                    resourceUri: "/api/v1/testcases/126/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-03T07:43:00Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41166
            },
            {
                status: 2,
                testrunId: 32934
            },
            {
                status: 2,
                testrunId: 30582
            }
            ],
            id: 5486,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5486/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-02T09:31:58Z",
                history: "000000020",
                id: 47556,
                resourceUri: "/api/v1/testruns/47556/",
                runBy: "testrun-47556",
                startTime: "2014-04-02T09:24:31Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 133,
                    module: "d007_alta_top",
                    name: "sim_tc_13_wdog_test",
                    resourceUri: "/api/v1/testcases/133/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T09:31:58Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41168
            },
            {
                status: 1,
                testrunId: 32936
            },
            {
                status: 1,
                testrunId: 30584
            }
            ],
            id: 5487,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5487/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-03T07:39:33Z",
                history: "000000010",
                id: 47558,
                resourceUri: "/api/v1/testruns/47558/",
                runBy: "testrun-47558",
                startTime: "2014-04-03T07:35:34Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 135,
                    module: "d007_alta_top",
                    name: "sim_tc_141_em4_wu_req_test",
                    resourceUri: "/api/v1/testcases/135/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-03T07:39:33Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41171
            },
            {
                status: 1,
                testrunId: 32939
            },
            {
                status: 1,
                testrunId: 30587
            }
            ],
            id: 5488,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5488/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-03T07:43:08Z",
                history: "000000010",
                id: 47561,
                resourceUri: "/api/v1/testruns/47561/",
                runBy: "testrun-47561",
                startTime: "2014-04-03T07:39:36Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 138,
                    module: "d007_alta_top",
                    name: "sim_tc_144_gmc_calib_start_test",
                    resourceUri: "/api/v1/testcases/138/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-03T07:43:08Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41172
            },
            {
                status: 1,
                testrunId: 32940
            },
            {
                status: 1,
                testrunId: 30588
            }
            ],
            id: 5489,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5489/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-03T07:47:24Z",
                history: "000000010",
                id: 47562,
                resourceUri: "/api/v1/testruns/47562/",
                runBy: "testrun-47562",
                startTime: "2014-04-03T07:43:03Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 139,
                    module: "d007_alta_top",
                    name: "sim_tc_145_usart_cc_test",
                    resourceUri: "/api/v1/testcases/139/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-03T07:47:24Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41173
            },
            {
                status: 1,
                testrunId: 32941
            },
            {
                status: 1,
                testrunId: 30589
            }
            ],
            id: 5490,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5490/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-02T10:27:37Z",
                history: "000000010",
                id: 47563,
                resourceUri: "/api/v1/testruns/47563/",
                runBy: "testrun-47563",
                startTime: "2014-04-02T10:20:42Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 140,
                    module: "d007_alta_top",
                    name: "sim_tc_146_dead_lfxo",
                    resourceUri: "/api/v1/testcases/140/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T10:27:37Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41175
            },
            {
                status: 1,
                testrunId: 32943
            },
            {
                status: 1,
                testrunId: 30591
            }
            ],
            id: 5491,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5491/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-02T10:31:50Z",
                history: "000000010",
                id: 47565,
                resourceUri: "/api/v1/testruns/47565/",
                runBy: "testrun-47565",
                startTime: "2014-04-02T10:27:39Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 142,
                    module: "d007_alta_top",
                    name: "sim_tc_148_cpuid_test",
                    resourceUri: "/api/v1/testcases/142/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T10:31:50Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 3,
                testrunId: 41176
            },
            {
                status: 3,
                testrunId: 32944
            },
            {
                status: 3,
                testrunId: 30592
            }
            ],
            id: 5492,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5492/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-02T09:34:47Z",
                history: "000000030",
                id: 47566,
                resourceUri: "/api/v1/testruns/47566/",
                runBy: "testrun-47566",
                startTime: "2014-04-02T09:31:11Z",
                status: 3,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 143,
                    module: "d007_alta_top",
                    name: "sim_tc_149_tm_regdis_test",
                    resourceUri: "/api/v1/testcases/143/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T09:34:47Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:12Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41177
            },
            {
                status: 1,
                testrunId: 32945
            },
            {
                status: 1,
                testrunId: 30593
            }
            ],
            id: 5493,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5493/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-02T09:36:11Z",
                history: "000000010",
                id: 47567,
                resourceUri: "/api/v1/testruns/47567/",
                runBy: "testrun-47567",
                startTime: "2014-04-02T09:32:00Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 144,
                    module: "d007_alta_top",
                    name: "sim_tc_14_dpi_test",
                    resourceUri: "/api/v1/testcases/144/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T09:36:11Z"
            },
            updated: "2014-04-01T10:16:12Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41179
            },
            {
                status: 2,
                testrunId: 32947
            },
            {
                status: 2,
                testrunId: 30595
            }
            ],
            id: 5494,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5494/",
            testRun: {
                created: "2014-04-01T10:16:12Z",
                endTime: "2014-04-02T09:40:42Z",
                history: "000000020",
                id: 47569,
                resourceUri: "/api/v1/testruns/47569/",
                runBy: "testrun-47569",
                startTime: "2014-04-02T09:34:50Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 146,
                    module: "d007_alta_top",
                    name: "sim_tc_151_fw_extend_test",
                    resourceUri: "/api/v1/testcases/146/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T09:40:42Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41180
            },
            {
                status: 1,
                testrunId: 32948
            },
            {
                status: 1,
                testrunId: 30596
            }
            ],
            id: 5495,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5495/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T09:40:25Z",
                history: "000000010",
                id: 47570,
                resourceUri: "/api/v1/testruns/47570/",
                runBy: "testrun-47570",
                startTime: "2014-04-02T09:36:14Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 147,
                    module: "d007_alta_top",
                    name: "sim_tc_152_extern_regulator_test",
                    resourceUri: "/api/v1/testcases/147/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T09:40:26Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41181
            },
            {
                status: 1,
                testrunId: 32949
            },
            {
                status: 1,
                testrunId: 30597
            }
            ],
            id: 5496,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5496/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T09:44:13Z",
                history: "000000010",
                id: 47571,
                resourceUri: "/api/v1/testruns/47571/",
                runBy: "testrun-47571",
                startTime: "2014-04-02T09:40:28Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 148,
                    module: "d007_alta_top",
                    name: "sim_tc_153_gpio_em4_ret_test",
                    resourceUri: "/api/v1/testcases/148/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T09:44:13Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41182
            },
            {
                status: 1,
                testrunId: 32950
            },
            {
                status: 1,
                testrunId: 30598
            }
            ],
            id: 5497,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5497/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T09:44:41Z",
                history: "000000010",
                id: 47572,
                resourceUri: "/api/v1/testruns/47572/",
                runBy: "testrun-47572",
                startTime: "2014-04-02T09:40:44Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 149,
                    module: "d007_alta_top",
                    name: "sim_tc_154_all_i2c_wu_test",
                    resourceUri: "/api/v1/testcases/149/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T09:44:41Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41184
            },
            {
                status: 1,
                testrunId: 32952
            },
            {
                status: 1,
                testrunId: 30600
            }
            ],
            id: 5498,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5498/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T09:48:44Z",
                history: "000000010",
                id: 47574,
                resourceUri: "/api/v1/testruns/47574/",
                runBy: "testrun-47574",
                startTime: "2014-04-02T09:44:16Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 151,
                    module: "d007_alta_top",
                    name: "sim_tc_156_all_dma_ch_test",
                    resourceUri: "/api/v1/testcases/151/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T09:48:44Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41188
            },
            {
                status: 1,
                testrunId: 32956
            },
            {
                status: 1,
                testrunId: 30604
            }
            ],
            id: 5499,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5499/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T09:54:50Z",
                history: "000000010",
                id: 47578,
                resourceUri: "/api/v1/testruns/47578/",
                runBy: "testrun-47578",
                startTime: "2014-04-02T09:44:43Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 155,
                    module: "d007_alta_top",
                    name: "sim_tc_15_pcnt_test",
                    resourceUri: "/api/v1/testcases/155/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T09:54:50Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41192
            },
            {
                status: 1,
                testrunId: 32960
            },
            {
                status: 1,
                testrunId: 30608
            }
            ],
            id: 5500,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5500/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T09:54:26Z",
                history: "000000010",
                id: 47582,
                resourceUri: "/api/v1/testruns/47582/",
                runBy: "testrun-47582",
                startTime: "2014-04-02T09:48:46Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 159,
                    module: "d007_alta_top",
                    name: "sim_tc_163_prefetch_test",
                    resourceUri: "/api/v1/testcases/159/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T09:54:26Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41193
            },
            {
                status: 2,
                testrunId: 32961
            },
            {
                status: 2,
                testrunId: 30609
            }
            ],
            id: 5501,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5501/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-05T02:16:55Z",
                history: "000000020",
                id: 47583,
                resourceUri: "/api/v1/testruns/47583/",
                runBy: "testrun-47583",
                startTime: "2014-04-04T23:16:56Z",
                status: 4,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 160,
                    module: "d007_alta_top",
                    name: "sim_tc_164_usb_suspend_resume_test",
                    resourceUri: "/api/v1/testcases/160/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-05T02:16:55Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41199
            },
            {
                status: 1,
                testrunId: 32967
            },
            {
                status: 1,
                testrunId: 30615
            }
            ],
            id: 5502,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5502/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T09:31:08Z",
                history: "000000010",
                id: 47589,
                resourceUri: "/api/v1/testruns/47589/",
                runBy: "testrun-47589",
                startTime: "2014-04-02T09:24:31Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 166,
                    module: "d007_alta_top",
                    name: "sim_tc_16_gpio_test",
                    resourceUri: "/api/v1/testcases/166/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T09:31:08Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41202
            },
            {
                status: 1,
                testrunId: 32970
            },
            {
                status: 1,
                testrunId: 30618
            }
            ],
            id: 5503,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5503/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T09:59:25Z",
                history: "000000010",
                id: 47592,
                resourceUri: "/api/v1/testruns/47592/",
                runBy: "testrun-47592",
                startTime: "2014-04-02T09:54:51Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 169,
                    module: "d007_alta_top",
                    name: "sim_tc_172_flash_iterator_test",
                    resourceUri: "/api/v1/testcases/169/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T09:59:25Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41207
            },
            {
                status: 1,
                testrunId: 32975
            },
            {
                status: 1,
                testrunId: 30623
            }
            ],
            id: 5504,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5504/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T10:04:24Z",
                history: "000000010",
                id: 47597,
                resourceUri: "/api/v1/testruns/47597/",
                runBy: "testrun-47597",
                startTime: "2014-04-02T09:59:27Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 174,
                    module: "d007_alta_top",
                    name: "sim_tc_177_usb_misc_test",
                    resourceUri: "/api/v1/testcases/174/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T10:04:24Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41208
            },
            {
                status: 1,
                testrunId: 32976
            },
            {
                status: 1,
                testrunId: 30624
            }
            ],
            id: 5505,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5505/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T10:09:39Z",
                history: "000000010",
                id: 47598,
                resourceUri: "/api/v1/testruns/47598/",
                runBy: "testrun-47598",
                startTime: "2014-04-02T10:04:26Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 175,
                    module: "d007_alta_top",
                    name: "sim_tc_178_waitstate_stress_test",
                    resourceUri: "/api/v1/testcases/175/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T10:09:39Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41210
            },
            {
                status: 1,
                testrunId: 32978
            },
            {
                status: 1,
                testrunId: 30626
            }
            ],
            id: 5506,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5506/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T10:20:39Z",
                history: "000000010",
                id: 47600,
                resourceUri: "/api/v1/testruns/47600/",
                runBy: "testrun-47600",
                startTime: "2014-04-02T10:09:41Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 177,
                    module: "d007_alta_top",
                    name: "sim_tc_17_i2c_test",
                    resourceUri: "/api/v1/testcases/177/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T10:20:39Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41211
            },
            {
                status: 1,
                testrunId: 32979
            },
            {
                status: 1,
                testrunId: 30627
            }
            ],
            id: 5507,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5507/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T12:00:30Z",
                history: "000000010",
                id: 47601,
                resourceUri: "/api/v1/testruns/47601/",
                runBy: "testrun-47601",
                startTime: "2014-04-02T10:31:52Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 178,
                    module: "d007_alta_top",
                    name: "sim_tc_180_usb_ahb_slave_test",
                    resourceUri: "/api/v1/testcases/178/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T12:00:30Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41216
            },
            {
                status: 1,
                testrunId: 32984
            },
            {
                status: 1,
                testrunId: 30632
            }
            ],
            id: 5508,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5508/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-05T02:25:11Z",
                history: "000000010",
                id: 47606,
                resourceUri: "/api/v1/testruns/47606/",
                runBy: "testrun-47606",
                startTime: "2014-04-04T23:25:11Z",
                status: 4,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 183,
                    module: "d007_alta_top",
                    name: "sim_tc_184_usb_ahb_master_test",
                    resourceUri: "/api/v1/testcases/183/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-05T02:25:11Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41218
            },
            {
                status: 2,
                testrunId: 32986
            },
            {
                status: 2,
                testrunId: 30634
            }
            ],
            id: 5509,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5509/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-05T05:16:57Z",
                history: "000000020",
                id: 47608,
                resourceUri: "/api/v1/testruns/47608/",
                runBy: "testrun-47608",
                startTime: "2014-04-05T02:16:58Z",
                status: 4,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 185,
                    module: "d007_alta_top",
                    name: "sim_tc_186_usb_low_speed_test",
                    resourceUri: "/api/v1/testcases/185/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-05T05:16:57Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41219
            },
            {
                status: 2,
                testrunId: 32987
            },
            {
                status: 2,
                testrunId: 30635
            }
            ],
            id: 5510,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5510/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-03T11:24:01Z",
                history: "",
                id: 47609,
                resourceUri: "/api/v1/testruns/47609/",
                runBy: "testrun-47609",
                startTime: "2014-04-03T11:19:43Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 186,
                    module: "d007_alta_top",
                    name: "sim_tc_187_cpf_issue_test",
                    resourceUri: "/api/v1/testcases/186/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-03T11:24:01Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41220
            },
            {
                status: 1,
                testrunId: 32988
            },
            {
                status: 1,
                testrunId: 30636
            }
            ],
            id: 5511,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5511/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-03T11:28:51Z",
                history: "",
                id: 47610,
                resourceUri: "/api/v1/testruns/47610/",
                runBy: "testrun-47610",
                startTime: "2014-04-03T11:24:03Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 187,
                    module: "d007_alta_top",
                    name: "sim_tc_188_imem_ft_giant_tsmc_issue_test",
                    resourceUri: "/api/v1/testcases/187/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-03T11:28:51Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41221
            },
            {
                status: 1,
                testrunId: 32989
            },
            {
                status: 1,
                testrunId: 30637
            }
            ],
            id: 5512,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5512/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-03T11:32:28Z",
                history: "",
                id: 47611,
                resourceUri: "/api/v1/testruns/47611/",
                runBy: "testrun-47611",
                startTime: "2014-04-03T11:28:53Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 188,
                    module: "d007_alta_top",
                    name: "sim_tc_18_acmp_test",
                    resourceUri: "/api/v1/testcases/188/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-03T11:32:28Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41222
            },
            {
                status: 1,
                testrunId: 32990
            },
            {
                status: 1,
                testrunId: 30638
            }
            ],
            id: 5513,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5513/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T12:05:18Z",
                history: "000000010",
                id: 47612,
                resourceUri: "/api/v1/testruns/47612/",
                runBy: "testrun-47612",
                startTime: "2014-04-02T12:00:33Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 189,
                    module: "d007_alta_top",
                    name: "sim_tc_190_flashtest_from_atp",
                    resourceUri: "/api/v1/testcases/189/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T12:05:18Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41223
            },
            {
                status: 1,
                testrunId: 32991
            },
            {
                status: 1,
                testrunId: 30639
            }
            ],
            id: 5514,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5514/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T12:09:11Z",
                history: "000000010",
                id: 47613,
                resourceUri: "/api/v1/testruns/47613/",
                runBy: "testrun-47613",
                startTime: "2014-04-02T12:05:21Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:26Z",
                    id: 190,
                    module: "d007_alta_top",
                    name: "sim_tc_191_gg_revc_prs_edge_detect_test",
                    resourceUri: "/api/v1/testcases/190/",
                    updated: "2014-02-28T09:06:26Z"
                },
                updated: "2014-04-02T12:09:11Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41225
            },
            {
                status: 1,
                testrunId: 32993
            },
            {
                status: 1,
                testrunId: 30641
            }
            ],
            id: 5515,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5515/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T12:16:40Z",
                history: "000000010",
                id: 47615,
                resourceUri: "/api/v1/testruns/47615/",
                runBy: "testrun-47615",
                startTime: "2014-04-02T12:12:46Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 192,
                    module: "d007_alta_top",
                    name: "sim_tc_193_gg_revc_featurewrite_test",
                    resourceUri: "/api/v1/testcases/192/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-02T12:16:40Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41226
            },
            {
                status: 1,
                testrunId: 32994
            },
            {
                status: 1,
                testrunId: 30642
            }
            ],
            id: 5516,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5516/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T12:12:44Z",
                history: "000000010",
                id: 47616,
                resourceUri: "/api/v1/testruns/47616/",
                runBy: "testrun-47616",
                startTime: "2014-04-02T12:09:13Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 193,
                    module: "d007_alta_top",
                    name: "sim_tc_194_gg_revc_regdis_auxhfrco_test",
                    resourceUri: "/api/v1/testcases/193/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-02T12:12:44Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41227
            },
            {
                status: 1,
                testrunId: 32995
            },
            {
                status: 1,
                testrunId: 30643
            }
            ],
            id: 5517,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5517/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-02T12:20:08Z",
                history: "000000010",
                id: 47617,
                resourceUri: "/api/v1/testruns/47617/",
                runBy: "testrun-47617",
                startTime: "2014-04-02T12:16:42Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 194,
                    module: "d007_alta_top",
                    name: "sim_tc_195_gg_revc_em2_dma_dbg_lockup_test",
                    resourceUri: "/api/v1/testcases/194/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-02T12:20:08Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41228
            },
            {
                status: 1,
                testrunId: 32996
            },
            {
                status: 1,
                testrunId: 30644
            }
            ],
            id: 5518,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5518/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-05T05:25:12Z",
                history: "000000010",
                id: 47618,
                resourceUri: "/api/v1/testruns/47618/",
                runBy: "testrun-47618",
                startTime: "2014-04-05T02:25:13Z",
                status: 4,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 195,
                    module: "d007_alta_top",
                    name: "sim_tc_196_gg_revc_usb_dma_flash_presc_test",
                    resourceUri: "/api/v1/testcases/195/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-05T05:25:12Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:13Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41230
            },
            {
                status: 1,
                testrunId: 32998
            },
            {
                status: 1,
                testrunId: 30646
            }
            ],
            id: 5519,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5519/",
            testRun: {
                created: "2014-04-01T10:16:13Z",
                endTime: "2014-04-03T11:36:17Z",
                history: "",
                id: 47620,
                resourceUri: "/api/v1/testruns/47620/",
                runBy: "testrun-47620",
                startTime: "2014-04-03T11:32:31Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 197,
                    module: "d007_alta_top",
                    name: "sim_tc_199_gg_revc_lfa_lfb_syncbusy_test",
                    resourceUri: "/api/v1/testcases/197/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T11:36:17Z"
            },
            updated: "2014-04-01T10:16:13Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41231
            },
            {
                status: 1,
                testrunId: 32999
            },
            {
                status: 1,
                testrunId: 30647
            }
            ],
            id: 5520,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5520/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T11:40:01Z",
                history: "",
                id: 47621,
                resourceUri: "/api/v1/testruns/47621/",
                runBy: "testrun-47621",
                startTime: "2014-04-03T11:36:19Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 198,
                    module: "d007_alta_top",
                    name: "sim_tc_19_vcmp_test",
                    resourceUri: "/api/v1/testcases/198/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T11:40:01Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41232
            },
            {
                status: 1,
                testrunId: 33000
            },
            {
                status: 1,
                testrunId: 30648
            }
            ],
            id: 5521,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5521/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T11:43:34Z",
                history: "",
                id: 47622,
                resourceUri: "/api/v1/testruns/47622/",
                runBy: "testrun-47622",
                startTime: "2014-04-03T11:40:03Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 199,
                    module: "d007_alta_top",
                    name: "sim_tc_1_test_prog",
                    resourceUri: "/api/v1/testcases/199/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T11:43:34Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41234
            },
            {
                status: 1,
                testrunId: 33002
            },
            {
                status: 1,
                testrunId: 30650
            }
            ],
            id: 5522,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5522/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-05T08:16:59Z",
                history: "",
                id: 47624,
                resourceUri: "/api/v1/testruns/47624/",
                runBy: "testrun-47624",
                startTime: "2014-04-05T05:16:59Z",
                status: 4,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 201,
                    module: "d007_alta_top",
                    name: "sim_tc_201_gg_revc_usb_se0_suppression",
                    resourceUri: "/api/v1/testcases/201/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-05T08:16:59Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41236
            },
            {
                status: 1,
                testrunId: 33004
            },
            {
                status: 1,
                testrunId: 30652
            }
            ],
            id: 5523,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5523/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T12:08:03Z",
                history: "",
                id: 47626,
                resourceUri: "/api/v1/testruns/47626/",
                runBy: "testrun-47626",
                startTime: "2014-04-03T12:03:41Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 203,
                    module: "d007_alta_top",
                    name: "sim_tc_203_gg_revc_usb_osen_edge_trig_test",
                    resourceUri: "/api/v1/testcases/203/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T12:08:03Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41242
            },
            {
                status: 1,
                testrunId: 33010
            },
            {
                status: 1,
                testrunId: 30658
            }
            ],
            id: 5524,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5524/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T12:12:07Z",
                history: "",
                id: 47632,
                resourceUri: "/api/v1/testruns/47632/",
                runBy: "testrun-47632",
                startTime: "2014-04-03T12:08:05Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 209,
                    module: "d007_alta_top",
                    name: "sim_tc_20_em4_tm_test",
                    resourceUri: "/api/v1/testcases/209/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T12:12:07Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41243
            },
            {
                status: 1,
                testrunId: 33011
            },
            {
                status: 1,
                testrunId: 30659
            }
            ],
            id: 5525,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5525/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T07:35:02Z",
                history: "000000010",
                id: 47633,
                resourceUri: "/api/v1/testruns/47633/",
                runBy: "testrun-47633",
                startTime: "2014-04-03T07:30:33Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 210,
                    module: "d007_alta_top",
                    name: "sim_tc_210_gg_revd_usb_phy_dis_test",
                    resourceUri: "/api/v1/testcases/210/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T07:35:02Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41245
            },
            {
                status: 2,
                testrunId: 33013
            },
            {
                status: 2,
                testrunId: 30661
            }
            ],
            id: 5526,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5526/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T12:17:16Z",
                history: "",
                id: 47635,
                resourceUri: "/api/v1/testruns/47635/",
                runBy: "testrun-47635",
                startTime: "2014-04-03T12:12:09Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 212,
                    module: "d007_alta_top",
                    name: "sim_tc_212_em2_auxhfrco_flash_corruption_test",
                    resourceUri: "/api/v1/testcases/212/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T12:17:17Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41246
            },
            {
                status: 1,
                testrunId: 33014
            },
            {
                status: 1,
                testrunId: 30662
            }
            ],
            id: 5527,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5527/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T12:30:36Z",
                history: "",
                id: 47636,
                resourceUri: "/api/v1/testruns/47636/",
                runBy: "testrun-47636",
                startTime: "2014-04-03T12:17:19Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 213,
                    module: "d007_alta_top",
                    name: "sim_tc_213_programming_time_vs_auxhfrco_test",
                    resourceUri: "/api/v1/testcases/213/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T12:30:36Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41249
            },
            {
                status: 1,
                testrunId: 33017
            },
            {
                status: 1,
                testrunId: 30665
            }
            ],
            id: 5528,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5528/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T12:39:09Z",
                history: "",
                id: 47639,
                resourceUri: "/api/v1/testruns/47639/",
                runBy: "testrun-47639",
                startTime: "2014-04-03T12:30:38Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 216,
                    module: "d007_alta_top",
                    name: "sim_tc_218_coremark_test",
                    resourceUri: "/api/v1/testcases/216/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T12:39:09Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41250
            },
            {
                status: 1,
                testrunId: 33018
            },
            {
                status: 1,
                testrunId: 30666
            }
            ],
            id: 5529,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5529/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T12:48:24Z",
                history: "",
                id: 47640,
                resourceUri: "/api/v1/testruns/47640/",
                runBy: "testrun-47640",
                startTime: "2014-04-03T12:39:11Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 217,
                    module: "d007_alta_top",
                    name: "sim_tc_21_imem_basic_test",
                    resourceUri: "/api/v1/testcases/217/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T12:48:25Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41252
            },
            {
                status: 2,
                testrunId: 33020
            },
            {
                status: 2,
                testrunId: 30668
            }
            ],
            id: 5530,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5530/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T13:35:13Z",
                history: "",
                id: 47642,
                resourceUri: "/api/v1/testruns/47642/",
                runBy: "testrun-47642",
                startTime: "2014-04-03T12:48:27Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 219,
                    module: "d007_alta_top",
                    name: "sim_tc_220_setup_hold_time_test",
                    resourceUri: "/api/v1/testcases/219/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T13:35:14Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41254
            },
            {
                status: 1,
                testrunId: 33022
            },
            {
                status: 1,
                testrunId: 30670
            }
            ],
            id: 5531,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5531/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T13:41:00Z",
                history: "",
                id: 47644,
                resourceUri: "/api/v1/testruns/47644/",
                runBy: "testrun-47644",
                startTime: "2014-04-03T13:35:16Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 221,
                    module: "d007_alta_top",
                    name: "sim_tc_222_i2c_scl_stretch_test",
                    resourceUri: "/api/v1/testcases/221/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T13:41:00Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 3,
                testrunId: 41255
            },
            {
                status: 3,
                testrunId: 33023
            },
            {
                status: 3,
                testrunId: 30671
            }
            ],
            id: 5532,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5532/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T14:01:01Z",
                history: "",
                id: 47645,
                resourceUri: "/api/v1/testruns/47645/",
                runBy: "testrun-47645",
                startTime: "2014-04-03T13:41:03Z",
                status: 3,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 222,
                    module: "d007_alta_top",
                    name: "sim_tc_222_spi_parameters_test",
                    resourceUri: "/api/v1/testcases/222/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T14:01:02Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41256
            },
            {
                status: 1,
                testrunId: 33024
            },
            {
                status: 1,
                testrunId: 30672
            }
            ],
            id: 5533,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5533/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T12:03:38Z",
                history: "",
                id: 47646,
                resourceUri: "/api/v1/testruns/47646/",
                runBy: "testrun-47646",
                startTime: "2014-04-03T11:19:48Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 223,
                    module: "d007_alta_top",
                    name: "sim_tc_223_revc_spi_slave_data_loss_sssearly_test",
                    resourceUri: "/api/v1/testcases/223/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T12:03:38Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41258
            },
            {
                status: 1,
                testrunId: 33026
            },
            {
                status: 1,
                testrunId: 30674
            }
            ],
            id: 5534,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5534/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T14:06:45Z",
                history: "",
                id: 47648,
                resourceUri: "/api/v1/testruns/47648/",
                runBy: "testrun-47648",
                startTime: "2014-04-03T14:01:04Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 225,
                    module: "d007_alta_top",
                    name: "sim_tc_225_pcnt_per_reset",
                    resourceUri: "/api/v1/testcases/225/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T14:06:45Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41260
            },
            {
                status: 1,
                testrunId: 33028
            },
            {
                status: 1,
                testrunId: 30676
            }
            ],
            id: 5535,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5535/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T14:10:47Z",
                history: "",
                id: 47650,
                resourceUri: "/api/v1/testruns/47650/",
                runBy: "testrun-47650",
                startTime: "2014-04-03T14:06:47Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 227,
                    module: "d007_alta_top",
                    name: "sim_tc_228_timer_redmine_6588_5995",
                    resourceUri: "/api/v1/testcases/227/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T14:10:47Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41261
            },
            {
                status: 1,
                testrunId: 33029
            },
            {
                status: 1,
                testrunId: 30677
            }
            ],
            id: 5536,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5536/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T14:20:33Z",
                history: "",
                id: 47651,
                resourceUri: "/api/v1/testruns/47651/",
                runBy: "testrun-47651",
                startTime: "2014-04-03T14:10:49Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 228,
                    module: "d007_alta_top",
                    name: "sim_tc_22_imem_dec_test",
                    resourceUri: "/api/v1/testcases/228/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T14:20:33Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41267
            },
            {
                status: 1,
                testrunId: 33035
            },
            {
                status: 1,
                testrunId: 30683
            }
            ],
            id: 5537,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5537/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T14:24:22Z",
                history: "",
                id: 47657,
                resourceUri: "/api/v1/testruns/47657/",
                runBy: "testrun-47657",
                startTime: "2014-04-03T14:20:35Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 234,
                    module: "d007_alta_top",
                    name: "sim_tc_235_idac_test",
                    resourceUri: "/api/v1/testcases/234/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T14:24:22Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41268
            },
            {
                status: 1,
                testrunId: 33036
            },
            {
                status: 1,
                testrunId: 30684
            }
            ],
            id: 5538,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5538/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T14:27:42Z",
                history: "",
                id: 47658,
                resourceUri: "/api/v1/testruns/47658/",
                runBy: "testrun-47658",
                startTime: "2014-04-03T14:24:24Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 235,
                    module: "d007_alta_top",
                    name: "sim_tc_236_hfrco_28_mhz_removed_test",
                    resourceUri: "/api/v1/testcases/235/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T14:27:43Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41269
            },
            {
                status: 1,
                testrunId: 33037
            },
            {
                status: 1,
                testrunId: 30685
            }
            ],
            id: 5539,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5539/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T14:32:26Z",
                history: "",
                id: 47659,
                resourceUri: "/api/v1/testruns/47659/",
                runBy: "testrun-47659",
                startTime: "2014-04-03T14:27:45Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 236,
                    module: "d007_alta_top",
                    name: "sim_tc_237_cortexm0p_integration_tests",
                    resourceUri: "/api/v1/testcases/236/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T14:32:26Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41272
            },
            {
                status: 1,
                testrunId: 33040
            },
            {
                status: 1,
                testrunId: 30688
            }
            ],
            id: 5540,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5540/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T14:57:22Z",
                history: "",
                id: 47662,
                resourceUri: "/api/v1/testruns/47662/",
                runBy: "testrun-47662",
                startTime: "2014-04-03T14:48:52Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 239,
                    module: "d007_alta_top",
                    name: "sim_tc_23_imem_fw_test",
                    resourceUri: "/api/v1/testcases/239/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T14:57:22Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41276
            },
            {
                status: 1,
                testrunId: 33044
            },
            {
                status: 1,
                testrunId: 30692
            }
            ],
            id: 5541,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5541/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T15:06:26Z",
                history: "",
                id: 47666,
                resourceUri: "/api/v1/testruns/47666/",
                runBy: "testrun-47666",
                startTime: "2014-04-03T14:57:24Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 243,
                    module: "d007_alta_top",
                    name: "sim_tc_243_lockable_ip_test",
                    resourceUri: "/api/v1/testcases/243/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T15:06:26Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41277
            },
            {
                status: 1,
                testrunId: 33045
            },
            {
                status: 1,
                testrunId: 30693
            }
            ],
            id: 5542,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5542/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T15:08:51Z",
                history: "",
                id: 47667,
                resourceUri: "/api/v1/testruns/47667/",
                runBy: "testrun-47667",
                startTime: "2014-04-03T15:03:00Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 244,
                    module: "d007_alta_top",
                    name: "sim_tc_244_em2_wakeup_all_clocks",
                    resourceUri: "/api/v1/testcases/244/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T15:08:51Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41278
            },
            {
                status: 1,
                testrunId: 33046
            },
            {
                status: 1,
                testrunId: 30694
            }
            ],
            id: 5543,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5543/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T14:38:53Z",
                history: "",
                id: 47668,
                resourceUri: "/api/v1/testruns/47668/",
                runBy: "testrun-47668",
                startTime: "2014-04-03T14:32:29Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 245,
                    module: "d007_alta_top",
                    name: "sim_tc_245_mtb_test",
                    resourceUri: "/api/v1/testcases/245/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T14:38:53Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41279
            },
            {
                status: 1,
                testrunId: 33047
            },
            {
                status: 1,
                testrunId: 30695
            }
            ],
            id: 5544,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5544/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T14:48:49Z",
                history: "",
                id: 47669,
                resourceUri: "/api/v1/testruns/47669/",
                runBy: "testrun-47669",
                startTime: "2014-04-03T14:38:55Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 246,
                    module: "d007_alta_top",
                    name: "sim_tc_24_imem_ft_test",
                    resourceUri: "/api/v1/testcases/246/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T14:48:49Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41280
            },
            {
                status: 1,
                testrunId: 33048
            },
            {
                status: 1,
                testrunId: 30696
            }
            ],
            id: 5545,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5545/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T15:11:49Z",
                history: "",
                id: 47670,
                resourceUri: "/api/v1/testruns/47670/",
                runBy: "testrun-47670",
                startTime: "2014-04-03T15:06:29Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 247,
                    module: "d007_alta_top",
                    name: "sim_tc_25_uart_test",
                    resourceUri: "/api/v1/testcases/247/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T15:11:49Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41281
            },
            {
                status: 2,
                testrunId: 33049
            },
            {
                status: 2,
                testrunId: 30697
            }
            ],
            id: 5546,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5546/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T15:30:08Z",
                history: "",
                id: 47671,
                resourceUri: "/api/v1/testruns/47671/",
                runBy: "testrun-47671",
                startTime: "2014-04-03T15:08:53Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 248,
                    module: "d007_alta_top",
                    name: "sim_tc_26_top_power",
                    resourceUri: "/api/v1/testcases/248/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T15:30:09Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41282
            },
            {
                status: 1,
                testrunId: 33050
            },
            {
                status: 1,
                testrunId: 30698
            }
            ],
            id: 5547,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5547/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T15:16:44Z",
                history: "",
                id: 47672,
                resourceUri: "/api/v1/testruns/47672/",
                runBy: "testrun-47672",
                startTime: "2014-04-03T15:11:51Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 249,
                    module: "d007_alta_top",
                    name: "sim_tc_272_em2_entry_irq_stress",
                    resourceUri: "/api/v1/testcases/249/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T15:16:44Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:14Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41283
            },
            {
                status: 2,
                testrunId: 33051
            },
            {
                status: 2,
                testrunId: 30699
            }
            ],
            id: 5548,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5548/",
            testRun: {
                created: "2014-04-01T10:16:14Z",
                endTime: "2014-04-03T15:36:09Z",
                history: "",
                id: 47673,
                resourceUri: "/api/v1/testruns/47673/",
                runBy: "testrun-47673",
                startTime: "2014-04-03T15:16:46Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 250,
                    module: "d007_alta_top",
                    name: "sim_tc_27_cpf_test",
                    resourceUri: "/api/v1/testcases/250/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T15:36:09Z"
            },
            updated: "2014-04-01T10:16:14Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41285
            },
            {
                status: 2,
                testrunId: 33053
            },
            {
                status: 2,
                testrunId: 30701
            }
            ],
            id: 5549,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5549/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T15:50:10Z",
                history: "",
                id: 47675,
                resourceUri: "/api/v1/testruns/47675/",
                runBy: "testrun-47675",
                startTime: "2014-04-03T15:30:11Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 252,
                    module: "d007_alta_top",
                    name: "sim_tc_29_cmu_test",
                    resourceUri: "/api/v1/testcases/252/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T15:50:10Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41286
            },
            {
                status: 1,
                testrunId: 33054
            },
            {
                status: 1,
                testrunId: 30702
            }
            ],
            id: 5550,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5550/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T15:51:21Z",
                history: "",
                id: 47676,
                resourceUri: "/api/v1/testruns/47676/",
                runBy: "testrun-47676",
                startTime: "2014-04-03T15:36:11Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 253,
                    module: "d007_alta_top",
                    name: "sim_tc_30_aes_test",
                    resourceUri: "/api/v1/testcases/253/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T15:51:21Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41287
            },
            {
                status: 1,
                testrunId: 33055
            },
            {
                status: 1,
                testrunId: 30703
            }
            ],
            id: 5551,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5551/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T15:56:09Z",
                history: "",
                id: 47677,
                resourceUri: "/api/v1/testruns/47677/",
                runBy: "testrun-47677",
                startTime: "2014-04-03T15:50:13Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 254,
                    module: "d007_alta_top",
                    name: "sim_tc_31_flashdma_test",
                    resourceUri: "/api/v1/testcases/254/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T15:56:09Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 3,
                testrunId: 41289
            },
            {
                status: 3,
                testrunId: 33057
            },
            {
                status: 3,
                testrunId: 30705
            }
            ],
            id: 5552,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5552/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T15:57:07Z",
                history: "",
                id: 47679,
                resourceUri: "/api/v1/testruns/47679/",
                runBy: "testrun-47679",
                startTime: "2014-04-03T15:51:23Z",
                status: 3,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 256,
                    module: "d007_alta_top",
                    name: "sim_tc_33_resetvalue_test",
                    resourceUri: "/api/v1/testcases/256/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T15:57:07Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41291
            },
            {
                status: 1,
                testrunId: 33059
            },
            {
                status: 1,
                testrunId: 30707
            }
            ],
            id: 5553,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5553/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T16:40:54Z",
                history: "",
                id: 47681,
                resourceUri: "/api/v1/testruns/47681/",
                runBy: "testrun-47681",
                startTime: "2014-04-03T16:24:42Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 258,
                    module: "d007_alta_top",
                    name: "sim_tc_35_bus_blaster_test",
                    resourceUri: "/api/v1/testcases/258/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T16:40:54Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41292
            },
            {
                status: 1,
                testrunId: 33060
            },
            {
                status: 1,
                testrunId: 30708
            }
            ],
            id: 5554,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5554/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T16:41:02Z",
                history: "",
                id: 47682,
                resourceUri: "/api/v1/testruns/47682/",
                runBy: "testrun-47682",
                startTime: "2014-04-03T16:32:57Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 259,
                    module: "d007_alta_top",
                    name: "sim_tc_36_reset_test",
                    resourceUri: "/api/v1/testcases/259/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T16:41:02Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41293
            },
            {
                status: 1,
                testrunId: 33061
            },
            {
                status: 1,
                testrunId: 30709
            }
            ],
            id: 5555,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5555/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T16:45:58Z",
                history: "",
                id: 47683,
                resourceUri: "/api/v1/testruns/47683/",
                runBy: "testrun-47683",
                startTime: "2014-04-03T16:40:58Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 260,
                    module: "d007_alta_top",
                    name: "sim_tc_37_dma_coverage_test",
                    resourceUri: "/api/v1/testcases/260/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T16:45:58Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 3,
                testrunId: 41294
            },
            {
                status: 3,
                testrunId: 33062
            },
            {
                status: 3,
                testrunId: 30710
            }
            ],
            id: 5556,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5556/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T16:46:20Z",
                history: "",
                id: 47684,
                resourceUri: "/api/v1/testruns/47684/",
                runBy: "testrun-47684",
                startTime: "2014-04-03T16:41:04Z",
                status: 3,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 261,
                    module: "d007_alta_top",
                    name: "sim_tc_38_em4_tm_test",
                    resourceUri: "/api/v1/testcases/261/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T16:46:20Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41295
            },
            {
                status: 2,
                testrunId: 33063
            },
            {
                status: 2,
                testrunId: 30711
            }
            ],
            id: 5557,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5557/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T16:18:30Z",
                history: "",
                id: 47685,
                resourceUri: "/api/v1/testruns/47685/",
                runBy: "testrun-47685",
                startTime: "2014-04-03T16:11:27Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 262,
                    module: "d007_alta_top",
                    name: "sim_tc_39_emu_coverage_test",
                    resourceUri: "/api/v1/testcases/262/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T16:18:31Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41296
            },
            {
                status: 1,
                testrunId: 33064
            },
            {
                status: 1,
                testrunId: 30712
            }
            ],
            id: 5558,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5558/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T16:24:40Z",
                history: "",
                id: 47686,
                resourceUri: "/api/v1/testruns/47686/",
                runBy: "testrun-47686",
                startTime: "2014-04-03T16:18:24Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 263,
                    module: "d007_alta_top",
                    name: "sim_tc_3_flashWrite_ramRead_ramWrite",
                    resourceUri: "/api/v1/testcases/263/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T16:24:40Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41297
            },
            {
                status: 1,
                testrunId: 33065
            },
            {
                status: 1,
                testrunId: 30713
            }
            ],
            id: 5559,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5559/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T16:32:55Z",
                history: "",
                id: 47687,
                resourceUri: "/api/v1/testruns/47687/",
                runBy: "testrun-47687",
                startTime: "2014-04-03T16:18:32Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 264,
                    module: "d007_alta_top",
                    name: "sim_tc_40_top_bus_test",
                    resourceUri: "/api/v1/testcases/264/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T16:32:55Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41298
            },
            {
                status: 2,
                testrunId: 33066
            },
            {
                status: 2,
                testrunId: 30714
            }
            ],
            id: 5560,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5560/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:00:13Z",
                history: "",
                id: 47688,
                resourceUri: "/api/v1/testruns/47688/",
                runBy: "testrun-47688",
                startTime: "2014-04-03T16:46:01Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 265,
                    module: "d007_alta_top",
                    name: "sim_tc_41_top_irq_test",
                    resourceUri: "/api/v1/testcases/265/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:00:13Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41299
            },
            {
                status: 1,
                testrunId: 33067
            },
            {
                status: 1,
                testrunId: 30715
            }
            ],
            id: 5561,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5561/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T16:55:59Z",
                history: "",
                id: 47689,
                resourceUri: "/api/v1/testruns/47689/",
                runBy: "testrun-47689",
                startTime: "2014-04-03T16:46:22Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 266,
                    module: "d007_alta_top",
                    name: "sim_tc_42_timer_coverage_test",
                    resourceUri: "/api/v1/testcases/266/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T16:55:59Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41300
            },
            {
                status: 1,
                testrunId: 33068
            },
            {
                status: 1,
                testrunId: 30716
            }
            ],
            id: 5562,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5562/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:04:24Z",
                history: "",
                id: 47690,
                resourceUri: "/api/v1/testruns/47690/",
                runBy: "testrun-47690",
                startTime: "2014-04-03T16:56:02Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 267,
                    module: "d007_alta_top",
                    name: "sim_tc_43_usart_coverage_test",
                    resourceUri: "/api/v1/testcases/267/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:04:24Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41301
            },
            {
                status: 1,
                testrunId: 33069
            },
            {
                status: 1,
                testrunId: 30717
            }
            ],
            id: 5563,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5563/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:27:29Z",
                history: "",
                id: 47691,
                resourceUri: "/api/v1/testruns/47691/",
                runBy: "testrun-47691",
                startTime: "2014-04-03T17:00:16Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 268,
                    module: "d007_alta_top",
                    name: "sim_tc_44_top_em_trans_test",
                    resourceUri: "/api/v1/testcases/268/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:27:30Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41302
            },
            {
                status: 1,
                testrunId: 33070
            },
            {
                status: 1,
                testrunId: 30718
            }
            ],
            id: 5564,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5564/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:10:18Z",
                history: "",
                id: 47692,
                resourceUri: "/api/v1/testruns/47692/",
                runBy: "testrun-47692",
                startTime: "2014-04-03T17:04:27Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 269,
                    module: "d007_alta_top",
                    name: "sim_tc_45_leuart_coverage_test",
                    resourceUri: "/api/v1/testcases/269/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:10:18Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41303
            },
            {
                status: 2,
                testrunId: 33071
            },
            {
                status: 2,
                testrunId: 30719
            }
            ],
            id: 5565,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5565/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T16:09:49Z",
                history: "",
                id: 47693,
                resourceUri: "/api/v1/testruns/47693/",
                runBy: "testrun-47693",
                startTime: "2014-04-03T15:56:11Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 270,
                    module: "d007_alta_top",
                    name: "sim_tc_46_part_config_test",
                    resourceUri: "/api/v1/testcases/270/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T16:09:49Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41304
            },
            {
                status: 1,
                testrunId: 33072
            },
            {
                status: 1,
                testrunId: 30720
            }
            ],
            id: 5566,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5566/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T16:05:10Z",
                history: "",
                id: 47694,
                resourceUri: "/api/v1/testruns/47694/",
                runBy: "testrun-47694",
                startTime: "2014-04-03T15:57:09Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 271,
                    module: "d007_alta_top",
                    name: "sim_tc_47_imem_auxhfrco_min_max_test",
                    resourceUri: "/api/v1/testcases/271/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T16:05:10Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41305
            },
            {
                status: 1,
                testrunId: 33073
            },
            {
                status: 1,
                testrunId: 30721
            }
            ],
            id: 5567,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5567/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T16:11:25Z",
                history: "",
                id: 47695,
                resourceUri: "/api/v1/testruns/47695/",
                runBy: "testrun-47695",
                startTime: "2014-04-03T16:05:13Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 272,
                    module: "d007_alta_top",
                    name: "sim_tc_48_imem_erase_abort_test",
                    resourceUri: "/api/v1/testcases/272/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T16:11:25Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41306
            },
            {
                status: 2,
                testrunId: 33074
            },
            {
                status: 2,
                testrunId: 30722
            }
            ],
            id: 5568,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5568/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T16:18:22Z",
                history: "",
                id: 47696,
                resourceUri: "/api/v1/testruns/47696/",
                runBy: "testrun-47696",
                startTime: "2014-04-03T16:09:52Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 273,
                    module: "d007_alta_top",
                    name: "sim_tc_49_debug_em2_test",
                    resourceUri: "/api/v1/testcases/273/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T16:18:22Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41307
            },
            {
                status: 1,
                testrunId: 33075
            },
            {
                status: 1,
                testrunId: 30723
            }
            ],
            id: 5569,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5569/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:24:13Z",
                history: "",
                id: 47697,
                resourceUri: "/api/v1/testruns/47697/",
                runBy: "testrun-47697",
                startTime: "2014-04-03T17:10:21Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 274,
                    module: "d007_alta_top",
                    name: "sim_tc_4_emu_test",
                    resourceUri: "/api/v1/testcases/274/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:24:13Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41309
            },
            {
                status: 1,
                testrunId: 33077
            },
            {
                status: 1,
                testrunId: 30725
            }
            ],
            id: 5570,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5570/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:33:17Z",
                history: "",
                id: 47699,
                resourceUri: "/api/v1/testruns/47699/",
                runBy: "testrun-47699",
                startTime: "2014-04-03T17:24:16Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 276,
                    module: "d007_alta_top",
                    name: "sim_tc_51_debug_security_test",
                    resourceUri: "/api/v1/testcases/276/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:33:17Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41311
            },
            {
                status: 1,
                testrunId: 33079
            },
            {
                status: 1,
                testrunId: 30727
            }
            ],
            id: 5571,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5571/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:34:58Z",
                history: "",
                id: 47701,
                resourceUri: "/api/v1/testruns/47701/",
                runBy: "testrun-47701",
                startTime: "2014-04-03T17:27:33Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 278,
                    module: "d007_alta_top",
                    name: "sim_tc_53_alta_top_sandbox_test",
                    resourceUri: "/api/v1/testcases/278/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:34:58Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41312
            },
            {
                status: 1,
                testrunId: 33080
            },
            {
                status: 1,
                testrunId: 30728
            }
            ],
            id: 5572,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5572/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:44:14Z",
                history: "",
                id: 47702,
                resourceUri: "/api/v1/testruns/47702/",
                runBy: "testrun-47702",
                startTime: "2014-04-03T17:35:00Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 279,
                    module: "d007_alta_top",
                    name: "sim_tc_54_imem_tm_io_test",
                    resourceUri: "/api/v1/testcases/279/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:44:15Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41313
            },
            {
                status: 1,
                testrunId: 33081
            },
            {
                status: 1,
                testrunId: 30729
            }
            ],
            id: 5573,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5573/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:49:21Z",
                history: "",
                id: 47703,
                resourceUri: "/api/v1/testruns/47703/",
                runBy: "testrun-47703",
                startTime: "2014-04-03T17:43:34Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 280,
                    module: "d007_alta_top",
                    name: "sim_tc_55_usart_low_cpu_frq_test",
                    resourceUri: "/api/v1/testcases/280/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:49:21Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41314
            },
            {
                status: 1,
                testrunId: 33082
            },
            {
                status: 1,
                testrunId: 30730
            }
            ],
            id: 5574,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5574/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:48:41Z",
                history: "",
                id: 47704,
                resourceUri: "/api/v1/testruns/47704/",
                runBy: "testrun-47704",
                startTime: "2014-04-03T17:44:16Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 281,
                    module: "d007_alta_top",
                    name: "sim_tc_56_clk_override_test",
                    resourceUri: "/api/v1/testcases/281/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:48:41Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 4,
                testrunId: 41315
            },
            {
                status: 4,
                testrunId: 33083
            },
            {
                status: 4,
                testrunId: 30731
            }
            ],
            id: 5575,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5575/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:53:32Z",
                history: "",
                id: 47705,
                resourceUri: "/api/v1/testruns/47705/",
                runBy: "testrun-47705",
                startTime: "2014-04-03T17:48:43Z",
                status: 4,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 282,
                    module: "d007_alta_top",
                    name: "sim_tc_57_cm3_portable_instruction",
                    resourceUri: "/api/v1/testcases/282/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:53:32Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 4,
                testrunId: 41316
            },
            {
                status: 4,
                testrunId: 33084
            },
            {
                status: 4,
                testrunId: 30732
            }
            ],
            id: 5576,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5576/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:53:21Z",
                history: "",
                id: 47706,
                resourceUri: "/api/v1/testruns/47706/",
                runBy: "testrun-47706",
                startTime: "2014-04-03T17:49:23Z",
                status: 4,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 283,
                    module: "d007_alta_top",
                    name: "sim_tc_58_cm3_portable_maxpower",
                    resourceUri: "/api/v1/testcases/283/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:53:21Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 4,
                testrunId: 41317
            },
            {
                status: 4,
                testrunId: 33085
            },
            {
                status: 4,
                testrunId: 30733
            }
            ],
            id: 5577,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5577/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:57:16Z",
                history: "",
                id: 47707,
                resourceUri: "/api/v1/testruns/47707/",
                runBy: "testrun-47707",
                startTime: "2014-04-03T17:53:23Z",
                status: 4,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 284,
                    module: "d007_alta_top",
                    name: "sim_tc_59_cm3_portable_maxspeed",
                    resourceUri: "/api/v1/testcases/284/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:57:16Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41318
            },
            {
                status: 1,
                testrunId: 33086
            },
            {
                status: 1,
                testrunId: 30734
            }
            ],
            id: 5578,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5578/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:43:31Z",
                history: "",
                id: 47708,
                resourceUri: "/api/v1/testruns/47708/",
                runBy: "testrun-47708",
                startTime: "2014-04-03T17:33:20Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 285,
                    module: "d007_alta_top",
                    name: "sim_tc_5_mem_test",
                    resourceUri: "/api/v1/testcases/285/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:43:31Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 4,
                testrunId: 41319
            },
            {
                status: 4,
                testrunId: 33087
            },
            {
                status: 4,
                testrunId: 30735
            }
            ],
            id: 5579,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5579/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T17:57:02Z",
                history: "",
                id: 47709,
                resourceUri: "/api/v1/testruns/47709/",
                runBy: "testrun-47709",
                startTime: "2014-04-03T17:53:34Z",
                status: 4,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 286,
                    module: "d007_alta_top",
                    name: "sim_tc_60_cm3_portable_typpower",
                    resourceUri: "/api/v1/testcases/286/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T17:57:02Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 3,
                testrunId: 41320
            },
            {
                status: 3,
                testrunId: 33088
            },
            {
                status: 3,
                testrunId: 30736
            }
            ],
            id: 5580,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5580/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T18:06:53Z",
                history: "",
                id: 47710,
                resourceUri: "/api/v1/testruns/47710/",
                runBy: "testrun-47710",
                startTime: "2014-04-03T17:57:05Z",
                status: 3,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 287,
                    module: "d007_alta_top",
                    name: "sim_tc_61_isolatch_test",
                    resourceUri: "/api/v1/testcases/287/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T18:06:53Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41321
            },
            {
                status: 1,
                testrunId: 33089
            },
            {
                status: 1,
                testrunId: 30737
            }
            ],
            id: 5581,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5581/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T18:06:02Z",
                history: "",
                id: 47711,
                resourceUri: "/api/v1/testruns/47711/",
                runBy: "testrun-47711",
                startTime: "2014-04-03T17:57:18Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 288,
                    module: "d007_alta_top",
                    name: "sim_tc_62_ram_bist_test",
                    resourceUri: "/api/v1/testcases/288/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T18:06:02Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41322
            },
            {
                status: 2,
                testrunId: 33090
            },
            {
                status: 2,
                testrunId: 30738
            }
            ],
            id: 5582,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5582/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T18:12:11Z",
                history: "",
                id: 47712,
                resourceUri: "/api/v1/testruns/47712/",
                runBy: "testrun-47712",
                startTime: "2014-04-03T18:06:04Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 289,
                    module: "d007_alta_top",
                    name: "sim_tc_63_cmu_test_1",
                    resourceUri: "/api/v1/testcases/289/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T18:12:11Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41323
            },
            {
                status: 1,
                testrunId: 33091
            },
            {
                status: 2,
                testrunId: 30739
            }
            ],
            id: 5583,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5583/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T18:34:12Z",
                history: "",
                id: 47713,
                resourceUri: "/api/v1/testruns/47713/",
                runBy: "testrun-47713",
                startTime: "2014-04-03T18:06:55Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 290,
                    module: "d007_alta_top",
                    name: "sim_tc_64_cmu_test_2",
                    resourceUri: "/api/v1/testcases/290/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T18:34:13Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41324
            },
            {
                status: 1,
                testrunId: 33092
            },
            {
                status: 2,
                testrunId: 30740
            }
            ],
            id: 5584,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5584/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T18:42:02Z",
                history: "",
                id: 47714,
                resourceUri: "/api/v1/testruns/47714/",
                runBy: "testrun-47714",
                startTime: "2014-04-03T18:12:13Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 291,
                    module: "d007_alta_top",
                    name: "sim_tc_65_cmu_test_3",
                    resourceUri: "/api/v1/testcases/291/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T18:42:02Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:15Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41325
            },
            {
                status: 2,
                testrunId: 33093
            },
            {
                status: 2,
                testrunId: 30741
            }
            ],
            id: 5585,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5585/",
            testRun: {
                created: "2014-04-01T10:16:15Z",
                endTime: "2014-04-03T18:51:33Z",
                history: "",
                id: 47715,
                resourceUri: "/api/v1/testruns/47715/",
                runBy: "testrun-47715",
                startTime: "2014-04-03T18:34:15Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 292,
                    module: "d007_alta_top",
                    name: "sim_tc_66_part_config_test_1",
                    resourceUri: "/api/v1/testcases/292/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T18:51:33Z"
            },
            updated: "2014-04-01T10:16:15Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41326
            },
            {
                status: 2,
                testrunId: 33094
            },
            {
                status: 2,
                testrunId: 30742
            }
            ],
            id: 5586,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5586/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T18:53:46Z",
                history: "",
                id: 47716,
                resourceUri: "/api/v1/testruns/47716/",
                runBy: "testrun-47716",
                startTime: "2014-04-03T18:42:04Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:27Z",
                    id: 293,
                    module: "d007_alta_top",
                    name: "sim_tc_67_part_config_test_2",
                    resourceUri: "/api/v1/testcases/293/",
                    updated: "2014-02-28T09:06:27Z"
                },
                updated: "2014-04-03T18:53:46Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41327
            },
            {
                status: 1,
                testrunId: 33095
            },
            {
                status: 1,
                testrunId: 30743
            }
            ],
            id: 5587,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5587/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T18:56:42Z",
                history: "",
                id: 47717,
                resourceUri: "/api/v1/testruns/47717/",
                runBy: "testrun-47717",
                startTime: "2014-04-03T18:51:36Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 294,
                    module: "d007_alta_top",
                    name: "sim_tc_68_extrareg_test",
                    resourceUri: "/api/v1/testcases/294/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T18:56:43Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41328
            },
            {
                status: 1,
                testrunId: 33096
            },
            {
                status: 1,
                testrunId: 30744
            }
            ],
            id: 5588,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5588/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T19:02:18Z",
                history: "",
                id: 47718,
                resourceUri: "/api/v1/testruns/47718/",
                runBy: "testrun-47718",
                startTime: "2014-04-03T18:53:49Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 295,
                    module: "d007_alta_top",
                    name: "sim_tc_69_hfxo_freq_test",
                    resourceUri: "/api/v1/testcases/295/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T19:02:18Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41329
            },
            {
                status: 1,
                testrunId: 33097
            },
            {
                status: 1,
                testrunId: 30745
            }
            ],
            id: 5589,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5589/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T19:04:44Z",
                history: "",
                id: 47719,
                resourceUri: "/api/v1/testruns/47719/",
                runBy: "testrun-47719",
                startTime: "2014-04-03T18:56:45Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 296,
                    module: "d007_alta_top",
                    name: "sim_tc_6_usart_test",
                    resourceUri: "/api/v1/testcases/296/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T19:04:44Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41330
            },
            {
                status: 1,
                testrunId: 33098
            },
            {
                status: 2,
                testrunId: 30746
            }
            ],
            id: 5590,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5590/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T19:08:25Z",
                history: "",
                id: 47720,
                resourceUri: "/api/v1/testruns/47720/",
                runBy: "testrun-47720",
                startTime: "2014-04-03T19:02:20Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 297,
                    module: "d007_alta_top",
                    name: "sim_tc_70_part_config_test_3",
                    resourceUri: "/api/v1/testcases/297/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T19:08:25Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 4,
                testrunId: 41331
            },
            {
                status: 4,
                testrunId: 33099
            },
            {
                status: 4,
                testrunId: 30747
            }
            ],
            id: 5591,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5591/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T19:09:42Z",
                history: "",
                id: 47721,
                resourceUri: "/api/v1/testruns/47721/",
                runBy: "testrun-47721",
                startTime: "2014-04-03T19:04:47Z",
                status: 4,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 298,
                    module: "d007_alta_top",
                    name: "sim_tc_71_dvk_emutest",
                    resourceUri: "/api/v1/testcases/298/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T19:09:43Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41333
            },
            {
                status: 1,
                testrunId: 33101
            },
            {
                status: 1,
                testrunId: 30749
            }
            ],
            id: 5592,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5592/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T19:18:43Z",
                history: "",
                id: 47723,
                resourceUri: "/api/v1/testruns/47723/",
                runBy: "testrun-47723",
                startTime: "2014-04-03T19:08:27Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 300,
                    module: "d007_alta_top",
                    name: "sim_tc_73_flashprog_test",
                    resourceUri: "/api/v1/testcases/300/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T19:18:43Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41334
            },
            {
                status: 1,
                testrunId: 33102
            },
            {
                status: 1,
                testrunId: 30750
            }
            ],
            id: 5593,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5593/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T19:19:54Z",
                history: "",
                id: 47724,
                resourceUri: "/api/v1/testruns/47724/",
                runBy: "testrun-47724",
                startTime: "2014-04-03T19:09:45Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 301,
                    module: "d007_alta_top",
                    name: "sim_tc_74_uart_multi_processor_mode_test",
                    resourceUri: "/api/v1/testcases/301/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T19:19:54Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41335
            },
            {
                status: 1,
                testrunId: 33103
            },
            {
                status: 1,
                testrunId: 30751
            }
            ],
            id: 5594,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5594/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T20:50:59Z",
                history: "",
                id: 47725,
                resourceUri: "/api/v1/testruns/47725/",
                runBy: "testrun-47725",
                startTime: "2014-04-03T19:18:46Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 302,
                    module: "d007_alta_top",
                    name: "sim_tc_75_adc_metal_test",
                    resourceUri: "/api/v1/testcases/302/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T20:51:00Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41336
            },
            {
                status: 1,
                testrunId: 33104
            },
            {
                status: 1,
                testrunId: 30752
            }
            ],
            id: 5595,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5595/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T19:33:19Z",
                history: "",
                id: 47726,
                resourceUri: "/api/v1/testruns/47726/",
                runBy: "testrun-47726",
                startTime: "2014-04-03T19:27:36Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 303,
                    module: "d007_alta_top",
                    name: "sim_tc_76_revB_dma_em2_test",
                    resourceUri: "/api/v1/testcases/303/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T19:33:19Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41337
            },
            {
                status: 1,
                testrunId: 33105
            },
            {
                status: 1,
                testrunId: 30753
            }
            ],
            id: 5596,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5596/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T19:39:03Z",
                history: "",
                id: 47727,
                resourceUri: "/api/v1/testruns/47727/",
                runBy: "testrun-47727",
                startTime: "2014-04-03T19:33:22Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 304,
                    module: "d007_alta_top",
                    name: "sim_tc_77_revB_wdog_em2_test",
                    resourceUri: "/api/v1/testcases/304/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T19:39:03Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41338
            },
            {
                status: 1,
                testrunId: 33106
            },
            {
                status: 1,
                testrunId: 30754
            }
            ],
            id: 5597,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5597/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T19:44:26Z",
                history: "",
                id: 47728,
                resourceUri: "/api/v1/testruns/47728/",
                runBy: "testrun-47728",
                startTime: "2014-04-03T19:39:06Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 305,
                    module: "d007_alta_top",
                    name: "sim_tc_78_revb_dmaleuart_test",
                    resourceUri: "/api/v1/testcases/305/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T19:44:26Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41339
            },
            {
                status: 1,
                testrunId: 33107
            },
            {
                status: 1,
                testrunId: 30755
            }
            ],
            id: 5598,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5598/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T19:50:58Z",
                history: "",
                id: 47729,
                resourceUri: "/api/v1/testruns/47729/",
                runBy: "testrun-47729",
                startTime: "2014-04-03T19:44:29Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 306,
                    module: "d007_alta_top",
                    name: "sim_tc_79_debug_destructive_chip_test",
                    resourceUri: "/api/v1/testcases/306/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T19:50:58Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41340
            },
            {
                status: 1,
                testrunId: 33108
            },
            {
                status: 1,
                testrunId: 30756
            }
            ],
            id: 5599,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5599/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T19:56:56Z",
                history: "",
                id: 47730,
                resourceUri: "/api/v1/testruns/47730/",
                runBy: "testrun-47730",
                startTime: "2014-04-03T19:51:01Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 307,
                    module: "d007_alta_top",
                    name: "sim_tc_7_timer_test",
                    resourceUri: "/api/v1/testcases/307/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T19:56:56Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41342
            },
            {
                status: 1,
                testrunId: 33110
            },
            {
                status: 1,
                testrunId: 30758
            }
            ],
            id: 5600,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5600/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T20:01:23Z",
                history: "",
                id: 47732,
                resourceUri: "/api/v1/testruns/47732/",
                runBy: "testrun-47732",
                startTime: "2014-04-03T19:56:59Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 309,
                    module: "d007_alta_top",
                    name: "sim_tc_81_revb_auxhfrco_em2_dis_test",
                    resourceUri: "/api/v1/testcases/309/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T20:01:23Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41343
            },
            {
                status: 1,
                testrunId: 33111
            },
            {
                status: 1,
                testrunId: 30759
            }
            ],
            id: 5601,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5601/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T19:27:33Z",
                history: "",
                id: 47733,
                resourceUri: "/api/v1/testruns/47733/",
                runBy: "testrun-47733",
                startTime: "2014-04-03T19:19:56Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 310,
                    module: "d007_alta_top",
                    name: "sim_tc_82_revb_debug_em2_test",
                    resourceUri: "/api/v1/testcases/310/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T19:27:33Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41344
            },
            {
                status: 1,
                testrunId: 33112
            },
            {
                status: 2,
                testrunId: 30760
            }
            ],
            id: 5602,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5602/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T20:06:47Z",
                history: "",
                id: 47734,
                resourceUri: "/api/v1/testruns/47734/",
                runBy: "testrun-47734",
                startTime: "2014-04-03T20:01:25Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 311,
                    module: "d007_alta_top",
                    name: "sim_tc_83_revb_irq_dma_isolation_test",
                    resourceUri: "/api/v1/testcases/311/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T20:06:47Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41346
            },
            {
                status: 1,
                testrunId: 33114
            },
            {
                status: 1,
                testrunId: 30762
            }
            ],
            id: 5603,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5603/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T20:12:21Z",
                history: "",
                id: 47736,
                resourceUri: "/api/v1/testruns/47736/",
                runBy: "testrun-47736",
                startTime: "2014-04-03T20:06:50Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 313,
                    module: "d007_alta_top",
                    name: "sim_tc_85_debug_bitbang_test",
                    resourceUri: "/api/v1/testcases/313/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T20:12:21Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41349
            },
            {
                status: 1,
                testrunId: 33117
            },
            {
                status: 1,
                testrunId: 30765
            }
            ],
            id: 5604,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5604/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T20:17:21Z",
                history: "",
                id: 47739,
                resourceUri: "/api/v1/testruns/47739/",
                runBy: "testrun-47739",
                startTime: "2014-04-03T20:12:24Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 316,
                    module: "d007_alta_top",
                    name: "sim_tc_8_adc_test",
                    resourceUri: "/api/v1/testcases/316/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T20:17:21Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41350
            },
            {
                status: 1,
                testrunId: 33118
            },
            {
                status: 1,
                testrunId: 30766
            }
            ],
            id: 5605,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5605/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T20:43:39Z",
                history: "",
                id: 47740,
                resourceUri: "/api/v1/testruns/47740/",
                runBy: "testrun-47740",
                startTime: "2014-04-03T20:17:24Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 317,
                    module: "d007_alta_top",
                    name: "sim_tc_90_revd_spi_shift_test",
                    resourceUri: "/api/v1/testcases/317/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T20:43:40Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41351
            },
            {
                status: 1,
                testrunId: 33119
            },
            {
                status: 1,
                testrunId: 30767
            }
            ],
            id: 5606,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5606/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T20:48:46Z",
                history: "",
                id: 47741,
                resourceUri: "/api/v1/testruns/47741/",
                runBy: "testrun-47741",
                startTime: "2014-04-03T20:43:42Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 318,
                    module: "d007_alta_top",
                    name: "sim_tc_91_revd_hfrco_override_test",
                    resourceUri: "/api/v1/testcases/318/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T20:48:46Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 2,
                testrunId: 41353
            },
            {
                status: 2,
                testrunId: 33121
            },
            {
                status: 2,
                testrunId: 30769
            }
            ],
            id: 5607,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5607/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T22:09:29Z",
                history: "",
                id: 47743,
                resourceUri: "/api/v1/testruns/47743/",
                runBy: "testrun-47743",
                startTime: "2014-04-03T21:18:05Z",
                status: 2,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 320,
                    module: "d007_alta_top",
                    name: "sim_tc_93_revc_spi_data_loss_test",
                    resourceUri: "/api/v1/testcases/320/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T22:09:29Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41354
            },
            {
                status: 1,
                testrunId: 33122
            },
            {
                status: 1,
                testrunId: 30770
            }
            ],
            id: 5608,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5608/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T20:54:03Z",
                history: "",
                id: 47744,
                resourceUri: "/api/v1/testruns/47744/",
                runBy: "testrun-47744",
                startTime: "2014-04-03T20:48:49Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 321,
                    module: "d007_alta_top",
                    name: "sim_tc_94_revc_flash_erase_abort_test",
                    resourceUri: "/api/v1/testcases/321/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T20:54:03Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41355
            },
            {
                status: 1,
                testrunId: 33123
            },
            {
                status: 1,
                testrunId: 30771
            }
            ],
            id: 5609,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5609/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T21:39:41Z",
                history: "",
                id: 47745,
                resourceUri: "/api/v1/testruns/47745/",
                runBy: "testrun-47745",
                startTime: "2014-04-03T20:51:03Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 322,
                    module: "d007_alta_top",
                    name: "sim_tc_95_revc_spi_slave_data_loss_test",
                    resourceUri: "/api/v1/testcases/322/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T21:39:41Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41356
            },
            {
                status: 1,
                testrunId: 33124
            },
            {
                status: 1,
                testrunId: 30772
            }
            ],
            id: 5610,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5610/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T21:18:02Z",
                history: "",
                id: 47746,
                resourceUri: "/api/v1/testruns/47746/",
                runBy: "testrun-47746",
                startTime: "2014-04-03T20:54:06Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 323,
                    module: "d007_alta_top",
                    name: "sim_tc_96_revc_disabled_le_clocks_test",
                    resourceUri: "/api/v1/testcases/323/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T21:18:02Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41357
            },
            {
                status: 1,
                testrunId: 33125
            },
            {
                status: 1,
                testrunId: 30773
            }
            ],
            id: 5611,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5611/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T22:49:57Z",
                history: "",
                id: 47747,
                resourceUri: "/api/v1/testruns/47747/",
                runBy: "testrun-47747",
                startTime: "2014-04-03T22:27:58Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 324,
                    module: "d007_alta_top",
                    name: "sim_tc_97_revc_spi_slave_sweep_test",
                    resourceUri: "/api/v1/testcases/324/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T22:49:57Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41358
            },
            {
                status: 1,
                testrunId: 33126
            },
            {
                status: 1,
                testrunId: 30774
            }
            ],
            id: 5612,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5612/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T22:02:54Z",
                history: "",
                id: 47748,
                resourceUri: "/api/v1/testruns/47748/",
                runBy: "testrun-47748",
                startTime: "2014-04-03T21:39:44Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 325,
                    module: "d007_alta_top",
                    name: "sim_tc_98_revc_usart_frac_baudrate_test",
                    resourceUri: "/api/v1/testcases/325/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T22:02:54Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41359
            },
            {
                status: 1,
                testrunId: 33127
            },
            {
                status: 1,
                testrunId: 30775
            }
            ],
            id: 5613,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5613/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T22:26:16Z",
                history: "",
                id: 47749,
                resourceUri: "/api/v1/testruns/47749/",
                runBy: "testrun-47749",
                startTime: "2014-04-03T22:02:57Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 326,
                    module: "d007_alta_top",
                    name: "sim_tc_99_revc_leuart_fract_test",
                    resourceUri: "/api/v1/testcases/326/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T22:26:16Z"
            },
            updated: "2014-04-01T10:16:16Z"
        },
        {
            created: "2014-04-01T10:16:16Z",
            excluded: false,
            history: [
            {
                status: 1,
                testrunId: 41360
            },
            {
                status: 1,
                testrunId: 33128
            },
            {
                status: 1,
                testrunId: 30776
            }
            ],
            id: 5614,
            jobRun: "/api/v1/jobruns/74/",
            resourceUri: "/api/v1/testrunjobmembers/5614/",
            testRun: {
                created: "2014-04-01T10:16:16Z",
                endTime: "2014-04-03T22:27:55Z",
                history: "",
                id: 47750,
                resourceUri: "/api/v1/testruns/47750/",
                runBy: "testrun-47750",
                startTime: "2014-04-03T22:09:32Z",
                status: 1,
                summary: "",
                testCase: {
                    created: "2014-02-28T09:06:28Z",
                    id: 327,
                    module: "d007_alta_top",
                    name: "sim_tc_9_rtc_test",
                    resourceUri: "/api/v1/testcases/327/",
                    updated: "2014-02-28T09:06:28Z"
                },
                updated: "2014-04-03T22:27:55Z"
            },
            updated: "2014-04-01T10:16:16Z"
        }
    ];
});
