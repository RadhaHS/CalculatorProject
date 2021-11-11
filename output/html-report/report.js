$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/calculator/tests/calculatorTest.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator Functional Test",
  "description": "I want to perform mathematical operation on calculator",
  "id": "calculator-functional-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "addition result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 14,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "32",
        "3"
      ],
      "line": 15,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 16,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;3"
    },
    {
      "cells": [
        "0",
        "5"
      ],
      "line": 17,
      "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 3333723800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I want perfrom mathematical operation with \"32\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 11,
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
  "duration": 5092500,
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
  "duration": 127600,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_addition()"
});
formatter.result({
  "duration": 3792549700,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.result_displayed_correctly()"
});
formatter.result({
  "duration": 42351900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 98542000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 11,
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
  "duration": 100800,
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
  "duration": 71200,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_addition()"
});
formatter.result({
  "duration": 2478521600,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.result_displayed_correctly()"
});
formatter.result({
  "duration": 26331200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 97221500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Addition of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;addition-of-two-number-completed-correctly;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I want perfrom mathematical operation with \"0\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I want perfrom mathematical operation with \"5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "i perform addition",
  "keyword": "When "
});
formatter.step({
  "line": 11,
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
  "duration": 70100,
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
  "duration": 93100,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_addition()"
});
formatter.result({
  "duration": 1521170100,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.result_displayed_correctly()"
});
formatter.result({
  "duration": 34119500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "substraction of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I want perfrom mathematical operation with \"\u003cnumber3\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i perform substraction",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "substraction result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
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
      "line": 27,
      "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "2",
        "3",
        "23"
      ],
      "line": 28,
      "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "2",
        "3",
        "34"
      ],
      "line": 29,
      "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 124506000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "substraction of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I want perfrom mathematical operation with \"23\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i perform substraction",
  "keyword": "When "
});
formatter.step({
  "line": 24,
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
  "duration": 71200,
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
  "duration": 68500,
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
  "duration": 42700,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_substraction()"
});
formatter.result({
  "duration": 4853000200,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.substraction_result_displayed_correctly()"
});
formatter.result({
  "duration": 36039500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 114078300,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "substraction of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;substraction-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I want perfrom mathematical operation with \"34\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "i perform substraction",
  "keyword": "When "
});
formatter.step({
  "line": 24,
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
  "duration": 40000,
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
  "duration": 65400,
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
  "duration": 78200,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_substraction()"
});
formatter.result({
  "duration": 4819091700,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.substraction_result_displayed_correctly()"
});
formatter.result({
  "duration": 31026700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "multiplication of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "i perform multiplication",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "multiplication result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 38,
      "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 39,
      "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "4",
        "5"
      ],
      "line": 40,
      "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 118057500,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "multiplication of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I want perfrom mathematical operation with \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "i perform multiplication",
  "keyword": "When "
});
formatter.step({
  "line": 35,
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
  "duration": 60600,
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
  "duration": 43700,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_multiplication()"
});
formatter.result({
  "duration": 2562550800,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.multiplication_result_displayed_correctly()"
});
formatter.result({
  "duration": 17266500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 118468700,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "multiplication of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;multiplication-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "I want perfrom mathematical operation with \"4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I want perfrom mathematical operation with \"5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "i perform multiplication",
  "keyword": "When "
});
formatter.step({
  "line": 35,
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
  "duration": 51100,
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
  "duration": 532200,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_multiplication()"
});
formatter.result({
  "duration": 2463833800,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.multiplication_result_displayed_correctly()"
});
formatter.result({
  "duration": 21755600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "division of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;division-of-two-number-completed-correctly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "division result displayed correctly",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;division-of-two-number-completed-correctly;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 49,
      "id": "calculator-functional-test;division-of-two-number-completed-correctly;;1"
    },
    {
      "cells": [
        "6",
        "3"
      ],
      "line": 50,
      "id": "calculator-functional-test;division-of-two-number-completed-correctly;;2"
    },
    {
      "cells": [
        "7",
        "3"
      ],
      "line": 51,
      "id": "calculator-functional-test;division-of-two-number-completed-correctly;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 92215000,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "division of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;division-of-two-number-completed-correctly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I want perfrom mathematical operation with \"6\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 46,
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
  "duration": 148400,
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
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_division()"
});
formatter.result({
  "duration": 2542804600,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.division_result_displayed_correctly()"
});
formatter.result({
  "duration": 20472800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 136887400,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "division of two number completed correctly",
  "description": "",
  "id": "calculator-functional-test;division-of-two-number-completed-correctly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "I want perfrom mathematical operation with \"7\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I want perfrom mathematical operation with \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 46,
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
  "duration": 122800,
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
  "duration": 55800,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_division()"
});
formatter.result({
  "duration": 2598899000,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.division_result_displayed_correctly()"
});
formatter.result({
  "duration": 34483600,
  "error_message": "java.lang.AssertionError: \nExpected: is \u003c2.3333333333333335\u003e\n     but: was \u003c2.33333333\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:18)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:6)\r\n\tat com.calculator.testSteps.CalculatorSteps.division_result_displayed_correctly(CalculatorSteps.java:110)\r\n\tat ✽.Then division result displayed correctly(src/test/java/com/calculator/tests/calculatorTest.feature:46)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "division of number By zero",
  "description": "",
  "id": "calculator-functional-test;division-of-number-by-zero",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "I want perfrom mathematical operation with \"\u003cnumber1\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I want perfrom mathematical operation with \"\u003cnumber2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "verify \"Error\" displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "calculator-functional-test;division-of-number-by-zero;",
  "rows": [
    {
      "cells": [
        "number1",
        "number2"
      ],
      "line": 60,
      "id": "calculator-functional-test;division-of-number-by-zero;;1"
    },
    {
      "cells": [
        "4",
        "0"
      ],
      "line": 61,
      "id": "calculator-functional-test;division-of-number-by-zero;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "calculator app is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.calculator_app_is_up_and_running()"
});
formatter.result({
  "duration": 110349600,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "division of number By zero",
  "description": "",
  "id": "calculator-functional-test;division-of-number-by-zero;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "I want perfrom mathematical operation with \"4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I want perfrom mathematical operation with \"0\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "i perform division",
  "keyword": "When "
});
formatter.step({
  "line": 57,
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
  "duration": 43800,
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
  "duration": 36700,
  "status": "passed"
});
formatter.match({
  "location": "CalculatorSteps.i_perform_division()"
});
formatter.result({
  "duration": 1563368000,
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
  "duration": 21562400,
  "status": "passed"
});
});