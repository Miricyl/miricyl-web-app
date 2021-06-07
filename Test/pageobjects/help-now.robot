*** Settings ***

Resource  ../resources/common.robot


*** Keywords ***

Ensure all the 'Urgent Services' are listed
  Shout
  Emergency Services
  Samaritans

Shout
  element text should be  xpath:/html/body/div/div/div[2]/div[1]/div[1]/div[1]/div[2]/span[1]/a  Shout
Emergency Services
  element text should be  xpath:/html/body/div/div/div[2]/div[1]/div[2]/div[1]/div[2]/span[1]/a  Emergency Services In an emergency please call 999
Samaritans
  element text should be  xpath:/html/body/div/div/div[2]/div[1]/div[3]/div[1]/div[2]/span[1]/a  Samaritans