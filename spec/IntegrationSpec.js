describe("Integration", function() {
  var page;

  beforeEach(function(done) {
    page = visit("/");
    page.ready(done);
  });

  describe("filling in input", function() {
    var text;

    beforeEach(function(done) {
      text = "text-" + Math.random();
      page.fill_in("input[ng-model='formData.text']", text);
      page.click("button");
      page.onBodyChange(done);
    });

    it("adds to-do item", function() {
      expect(page.find("#todo-list").text()).toContain(text);
    });

    it("fails", function() {
      expect(1).toEqual(0);
    });

      xit("fails", function() {
          expect(1).toEqual(0);
      });
  });
});
