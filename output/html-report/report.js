$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/calculator/tests/calculatorTest.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator Functional Test",
  "description": "I want to perform mathematical operation on calculator",
  "id": "calculator-functional-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "addition result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 18,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "32",
        "3"
      ],
      "line": 19,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 20,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;3"
    },
    {
      "cells": [
        "0",
        "5"
      ],
      "line": 21,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# There are 3 issues on the staging environment."
    },
    {
      "line": 5,
      "value": "#1. 5 is displaying as 6"
    },
    {
      "line": 6,
      "value": "#2. Multiplication functionality is not working as expected"
    },
    {
      "line": 7,
      "value": "#3. Operations with decimals is not working as expected"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 3508080500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I want perfrom mathematical operation with \"32\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "addition result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 2222400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 54100,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_addition()"
});
formatter.result({
  "duration": 3668856100,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.result_displayed_correctly()"
});
formatter.result({
  "duration": 32533500,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# There are 3 issues on the staging environment."
    },
    {
      "line": 5,
      "value": "#1. 5 is displaying as 6"
    },
    {
      "line": 6,
      "value": "#2. Multiplication functionality is not working as expected"
    },
    {
      "line": 7,
      "value": "#3. Operations with decimals is not working as expected"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 100167900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "addition result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 61400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_addition()"
});
formatter.result({
  "duration": 2534586400,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.result_displayed_correctly()"
});
formatter.result({
  "duration": 17044000,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# There are 3 issues on the staging environment."
    },
    {
      "line": 5,
      "value": "#1. 5 is displaying as 6"
    },
    {
      "line": 6,
      "value": "#2. Multiplication functionality is not working as expected"
    },
    {
      "line": 7,
      "value": "#3. Operations with decimals is not working as expected"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 122541700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I want perfrom mathematical operation with \"0\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I want perfrom mathematical operation with \"5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "addition result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 95900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 70600,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_addition()"
});
formatter.result({
  "duration": 1484419100,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.result_displayed_correctly()"
});
formatter.result({
  "duration": 15476800,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c5\u003e\n     but: was \u003c6\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat com.calculator.testSteps.CalculatorSteps.result_displayed_correctly(CalculatorSteps.java:81)\r\n\tat ✽.Then addition result displayed correctly(src/test/java/com/calculator/tests/calculatorTest.feature:15)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "substraction of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I want perfrom mathematical operation with \"\u003cnumber3\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i perform substraction",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "substraction result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2",
        "number3"
      ],
      "line": 31,
      "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "2",
        "3",
        "23"
      ],
      "line": 32,
      "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "2",
        "3",
        "34"
      ],
      "line": 33,
      "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# There are 3 issues on the staging environment."
    },
    {
      "line": 5,
      "value": "#1. 5 is displaying as 6"
    },
    {
      "line": 6,
      "value": "#2. Multiplication functionality is not working as expected"
    },
    {
      "line": 7,
      "value": "#3. Operations with decimals is not working as expected"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 88876900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "substraction of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I want perfrom mathematical operation with \"23\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i perform substraction",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "substraction result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 35900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 33000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_substraction()"
});
formatter.result({
  "duration": 4873311400,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.substraction_result_displayed_correctly()"
});
formatter.result({
  "duration": 22806300,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# There are 3 issues on the staging environment."
    },
    {
      "line": 5,
      "value": "#1. 5 is displaying as 6"
    },
    {
      "line": 6,
      "value": "#2. Multiplication functionality is not working as expected"
    },
    {
      "line": 7,
      "value": "#3. Operations with decimals is not working as expected"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 121609700,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "substraction of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I want perfrom mathematical operation with \"34\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "i perform substraction",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "substraction result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 50300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 64700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_substraction()"
});
formatter.result({
  "duration": 4880423500,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.substraction_result_displayed_correctly()"
});
formatter.result({
  "duration": 19082600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "multiplication of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "i perform multiplication",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "multiplication result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 42,
      "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 43,
      "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "4",
        "5"
      ],
      "line": 44,
      "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# There are 3 issues on the staging environment."
    },
    {
      "line": 5,
      "value": "#1. 5 is displaying as 6"
    },
    {
      "line": 6,
      "value": "#2. Multiplication functionality is not working as expected"
    },
    {
      "line": 7,
      "value": "#3. Operations with decimals is not working as expected"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 119687500,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "multiplication of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "i perform multiplication",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "multiplication result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_multiplication()"
});
formatter.result({
  "duration": 2611659300,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.multiplication_result_displayed_correctly()"
});
formatter.result({
  "duration": 35186300,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c6\u003e\n     but: was \u003c8\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat com.calculator.testSteps.CalculatorSteps.multiplication_result_displayed_correctly(CalculatorSteps.java:102)\r\n\tat ✽.Then multiplication result displayed correctly(src/test/java/com/calculator/tests/calculatorTest.feature:39)\r\n",
  "status": "failed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# There are 3 issues on the staging environment."
    },
    {
      "line": 5,
      "value": "#1. 5 is displaying as 6"
    },
    {
      "line": 6,
      "value": "#2. Multiplication functionality is not working as expected"
    },
    {
      "line": 7,
      "value": "#3. Operations with decimals is not working as expected"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 129873600,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "multiplication of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "I want perfrom mathematical operation with \"4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I want perfrom mathematical operation with \"5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "i perform multiplication",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "multiplication result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 94100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 415400,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_multiplication()"
});
formatter.result({
  "duration": 2558549800,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.multiplication_result_displayed_correctly()"
});
formatter.result({
  "duration": 32844200,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c20\u003e\n     but: was \u003c26\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat com.calculator.testSteps.CalculatorSteps.multiplication_result_displayed_correctly(CalculatorSteps.java:102)\r\n\tat ✽.Then multiplication result displayed correctly(src/test/java/com/calculator/tests/calculatorTest.feature:39)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 46,
  "name": "division of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;division-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "division result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;division-of-two-number-completed-correctly;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 53,
      "id": "calculator-functional-test;division-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "6",
        "3"
      ],
      "line": 54,
      "id": "calculator-functional-test;division-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "7",
        "3"
      ],
      "line": 55,
      "id": "calculator-functional-test;division-of-two-number-completed-correctly;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# There are 3 issues on the staging environment."
    },
    {
      "line": 5,
      "value": "#1. 5 is displaying as 6"
    },
    {
      "line": 6,
      "value": "#2. Multiplication functionality is not working as expected"
    },
    {
      "line": 7,
      "value": "#3. Operations with decimals is not working as expected"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 114503400,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "division of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;division-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I want perfrom mathematical operation with \"6\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "division result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 62500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 94400,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_division()"
});
formatter.result({
  "duration": 2627653200,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.division_result_displayed_correctly()"
});
formatter.result({
  "duration": 11528300,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# There are 3 issues on the staging environment."
    },
    {
      "line": 5,
      "value": "#1. 5 is displaying as 6"
    },
    {
      "line": 6,
      "value": "#2. Multiplication functionality is not working as expected"
    },
    {
      "line": 7,
      "value": "#3. Operations with decimals is not working as expected"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 113248000,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "division of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;division-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 47,
  "name": "I want perfrom mathematical operation with \"7\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "division result displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 31000,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_division()"
});
formatter.result({
  "duration": 2619308800,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.division_result_displayed_correctly()"
});
formatter.result({
  "duration": 26237400,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c2.3333333333333335\u003e\n     but: was \u003c2.0\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat com.calculator.testSteps.CalculatorSteps.division_result_displayed_correctly(CalculatorSteps.java:110)\r\n\tat ✽.Then division result displayed correctly(src/test/java/com/calculator/tests/calculatorTest.feature:50)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 57,
  "name": "division of number By zero",
  "description": "",
  "id": "calculator-functional-test;division-of-number-by-zero",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "verify \"Error\" displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;division-of-number-by-zero;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 64,
      "id": "calculator-functional-test;division-of-number-by-zero;;1"
    },
    {
      "cells": [
        "4",
        "0"
      ],
      "line": 65,
      "id": "calculator-functional-test;division-of-number-by-zero;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "# There are 3 issues on the staging environment."
    },
    {
      "line": 5,
      "value": "#1. 5 is displaying as 6"
    },
    {
      "line": 6,
      "value": "#2. Multiplication functionality is not working as expected"
    },
    {
      "line": 7,
      "value": "#3. Operations with decimals is not working as expected"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 96017300,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "division of number By zero",
  "description": "",
  "id": "calculator-functional-test;division-of-number-by-zero;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "I want perfrom mathematical operation with \"4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "I want perfrom mathematical operation with \"0\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "verify \"Error\" displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 63700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 44
    }
  ],
  "location": "CalculatorSteps.i_want_perfrom_addition_with(String)"
});
formatter.result({
  "duration": 47700,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_division()"
});
formatter.result({
  "duration": 1556842700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Error",
      "offset": 8
    }
  ],
  "location": "CalculatorSteps.verify_displayed(String)"
});
formatter.result({
  "duration": 34521400,
  "status": "passed"
});
});