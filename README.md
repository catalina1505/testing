# intro-test-jasmine

Lessons learnt:
- you can skip a test/test suite by adding 'x' in front of it (e.g: "xdescribe"; "xit") - helps while debugging;
- spies (spyOn) are useful when dealing with third parties/APIs;
- use mocking to don't need to hit the servers all the time;
- testing things that are asynchronous is where mocks excel at;