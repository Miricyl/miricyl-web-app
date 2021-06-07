*** Settings ***

resource  ../pageobjects/index.robot
resource  ../pageobjects/help-now.robot
resource  ../resources/common.robot

Test Setup  begin test
Test Teardown  end test


*** Test Cases ***

Help Now Returns Urgent Services
  Go to the MIRICYL home page
  Click on the help now button
  Ensure all the 'Urgent Services' are listed