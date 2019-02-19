const getBody = (releaseName) => {
  return `
  **Important Pull Requests / Topics to integrate into the Release**
  * topic (who) [PR](http://link.to.pr)
  # Reminder (-3 days before code freeze)
  * [ ] Remind the team about todo's for the release in #announcements
    \`\`\`
    Hey all, the integration week is almost over
        * Please finish your integration work
        * Please review and merge open PR's until monday evening
        * Are there important pull requests/tickets which *MUST* be in the upcoming release? Please contact me, if necessary.
    \`\`\`
  # Code Freeze
  * [ ] Update the framework version of the upstream [editor](https://github.com/upfrontIO/livingdocs-editor/blob/master/package.json)/[server](https://github.com/upfrontIO/livingdocs-server/blob/master/package.json) to the same version
  * [ ] Ask about state of the pull requests in #announcements
    \`\`\`
    * Today I will create the upstream release branch \`${releaseName}\`.
    * Are there important un-merged pull requests? please contact me.
    \`\`\`
  * [ ] Announce and [create the upstream release branch](https://github.com/upfrontIO/team/blob/master/How-We-Work/Release-Process/Details/Create-Release-Branches.md) for the server/editor
  * Release Notes
    * [ ] Use the [release notes](https://github.com/upfrontIO/livingdocs-release-notes) generator with \`npx github:DaRaFF/release-notes-generator\`
    * [ ] Read pull requests of the upstream [server](https://github.com/upfrontIO/livingdocs-server/tags)/[editor](https://github.com/upfrontIO/livingdocs-editor/tags), give feedback about quality (changelog, test instructions)
    * [ ] Add new test cases (of the current release) to [Testrail](https://livingdocs.testrail.io/)
    * [ ] Polish/Finish the [release notes](https://github.com/upfrontIO/livingdocs-release-notes)
  * UX Check
    * [ ] Integrate the latest version from master into service master
    * [ ] Inform the UX team based on the latest release notes to check the UX
    \`\`\`
    Reminder: @rawdiggie @Sven Rüf
    The \`${releaseName}\` is installed on https://develop.livingdocs.io/.
    The (unpolished) release notes can be found at <link>.
    Please check if everything is ok regarding UX.
    \`\`\`
  * Check if the downstream integration branches of the **PREVIOUS** release are in a correct state
    * [ ] Rebase the downstream integration branches (service, boilerplate, nzz, bluewin)
    * [ ] Pin the upstream version in the downstream branches to the correct version [editor](https://github.com/upfrontIO/livingdocs-editor/releases)/[server](https://github.com/upfrontIO/livingdocs-server/releases)
    * [ ] Check and update the integration notes (e.g. https://github.com/nzzdev/livingdocs-api/pull/3566#issue-173435126)
  * [ ] Set a main focus for testing
  * [ ] Ask for help with a release notes review in #announcements
    \`\`\`
    The release notes for \`${releaseName}\` are ready. Please review them carefully, because everybody should know what is part of our release. Also consider that the release-notes are provided to our customers.
    \`\`\`
  * [ ] Create a [documentation integration branch](https://github.com/livingdocsIO/livingdocs) of the next release.
  * [ ] [Create downstream integration](https://github.com/upfrontIO/team/blob/master/How-We-Work/Release-Process/Details/Integration-Branches.md) branches of the next release (boilerplate, nzz, bluewin)
    \`\`\`
    npx @livingdocs/release-tools@latest create-downstream-release-branch
    \`\`\`
  * [ ] Update livingdocs-integration.json of the [server](https://github.com/upfrontIO/livingdocs-server/blob/master/livingdocs-integration.json)/[editor](https://github.com/upfrontIO/livingdocs-editor/blob/master/livingdocs-integration.json)
  * [ ] Update Integration overview [link](https://docs.google.com/spreadsheets/d/1CDY5wqXphXEfh2z4E1uM1RjBptvzMr8u0Wk5ZyXGzaY/edit#gid=0)
  * Test the upstream (assign a QA for upstream tests)
    * [ ] Create a new test run in [Testrail](https://livingdocs.testrail.io/)
    * [ ] Test the upstream and add the results to [Testrail](https://livingdocs.testrail.io/)
    * [ ] categorise bugs in MUST and COULD fix (?)
    * [ ] assign bugs to people
    * [ ] decide if COULD tickets are transformed to issues for upcoming sprints
  * [ ] Manage/track MUST bugs
  * [ ] Groom release-notes
  # Announce Release (freeze +7 days)
  * [ ] Get a Webinar date and link from Gabriel (add this to the release mail later)
  * [ ] Inform the team via slack that the release is ready in #announcements
    \`\`\`
    The release \`${releaseName}\` is ready.
    I will merge the release-notes and do the communication with the customers.
    \`\`\`
    * [ ] merge the [release-notes](https://github.com/upfrontIO/livingdocs-release-notes) and the [documentation](https://github.com/upfrontIO/livingdocs)
    * [ ] communicate release to customers via [Campaign Monitor](https://livingdocsag.createsend.com/)
    * [ ] communicate to the customer if a feature or a bugfix he expected is not taken care of.
  # NZZ Downstream QA
  * [ ] Organise with Michael Heiniger that \`upstream-${releaseName}\` links to the [nzz integration environment](edit-integration-test.nzz-tech.ch) (you can check the installed version [here](http://api-livingdocs-integration-test.nzz-tech.ch/nzz/release)
  * [ ] Rebase the downstream integration branch of the NZZ
  * [ ] make a smoke test on the [nzz integration environment](edit-integration-test.nzz-tech.ch)
  * [ ] Contact Beat Strebel from the NZZ and tell him that the NZZ QA's can start with testing the release.
  * [ ] The NZZ QA's test the current release on the [nzz integration environment](https://edit-integration-test.nzz-tech.ch) (NZZ QA's)
  * [ ] Categorise NZZ test results
    * Are there error clusters?
    * Can we activate/move features to the example server to detect problems earlier?
    * Can we write a test for the regression bug?
    * Add documentation to the  [Release Management Log](https://docs.google.com/document/d/1Z4IwdwgHnNbnaH3m4WvTNSLkVO9xTB8umHCKNSk4Ja8/edit#) to talk about in the retrospective
  *  [ ] Manage NZZ Bug fixing
  # Other Downstream QA
  * Test and fix the other downstream projects
    * Bluewin
      *  [ ] Test the Bluewin Downstream
      *  [ ] Manage Bug fixing
    * Service
      *  [ ] Test the Service Downstream
      *  [ ] Manage Bug fixing
    * Boilerplate
      *  [ ] Test the Boilerplate Downstream
      *  [ ] Manage Bug fixing
    * Magazine Boilerplate
      *  [ ] Test the Boilerplate Downstream
      *  [ ] Manage Bug fixing
  `
}

module.exports = {
  getBody: getBody
}
