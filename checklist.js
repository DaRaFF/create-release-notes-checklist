const getBody = (releaseName) => {
  return `
  **References**
  * [Bug Dashboard](https://github.com/livingdocsIO/livingdocs-planning/projects/56)
  * [Integration Branch Overview](https://docs.google.com/spreadsheets/d/1CDY5wqXphXEfh2z4E1uM1RjBptvzMr8u0Wk5ZyXGzaY/edit#gid=0)

  **Important Pull Requests / Topics to integrate into the Release**
  * topic (who) [PR](http://link.to.pr)

  **Budget**

  * [ ] 8h NZZ maintenance
  * [ ] 8h BLZ
  * [ ] 4h Swisscom SLA
  * [ ] 4h Bluewin SLA
  * [ ] 16h Livingdocs

  # Reminder (-3 days before code freeze)
  * [ ] Remind the team about todo's for the release in #announcements
    \`\`\`
    Hey all, the integration week is almost over
        * Please finish your integration work
        * Please review and merge open PR's until monday evening
        * Are there important pull requests/tickets which *MUST* be in the upcoming release? Please contact me, if necessary.
    \`\`\`

  # Release Notes
  To make the process more efficient, it's also possible to start with release notes before the official code freeze
    * [ ] Use the [release notes](https://github.com/upfrontIO/livingdocs-release-notes) generator with \`npx github:DaRaFF/release-notes-generator\`
    * [ ] Read pull requests of the upstream [server](https://github.com/upfrontIO/livingdocs-server/tags)/[editor](https://github.com/upfrontIO/livingdocs-editor/tags), give feedback about quality (changelog, test instructions)
    * [ ] Add new test cases (of the current release) to [Testrail](https://livingdocs.testrail.io/)
    * [ ] Polish/Finish the [release notes](https://github.com/upfrontIO/livingdocs-release-notes)
    * [ ] Ask for help with a release notes review in #announcements
      \`\`\`
      The release notes for \`${releaseName}\` are ready. Please review them carefully, because everybody should know what is part of our release. Also consider that the release-notes are provided to our customers.
      \`\`\`

  # Code Freeze
  * [ ] Ask about state of the pull requests in #announcements
    \`\`\`
    * Today I will create the upstream release branch \`${releaseName}\`.
    * Are there important un-merged pull requests? please contact me.
    \`\`\`
  * [ ] Announce and [create the upstream release branch](https://github.com/upfrontIO/team/blob/master/How-We-Work/Release-Process/Details/Create-Release-Branches.md) for the server/editor/framework
  * [ ] Update the framework version of the upstream editor/server in \`${releaseName}\` branch
  * [ ] Remove the bluewin Drone build in \`${releaseName}\` branch
  * [ ] Create a new test run in [Testrail](https://livingdocs.testrail.io/) with \`npm run cypress:testrail\` (start server/editor with \`ENVIRONMENT=cypress\`)
  * [ ] Update Integration overview [link](https://docs.google.com/spreadsheets/d/1CDY5wqXphXEfh2z4E1uM1RjBptvzMr8u0Wk5ZyXGzaY/edit#gid=0)

  # UX Check
  * [ ] Integrate the latest version from master into service master ([service develop editor version](https://develop.livingdocs.io/version.json) // [service develop server version](https://service-server-develop.livingdocs.io/version)
  * [ ] Inform the UX team based on the latest release notes to check the UX
  \`\`\`
  Reminder: @rawdiggie @Sven Rüf
  The \`${releaseName}\` is installed on https://develop.livingdocs.io/.
  The (unpolished) release notes can be found at <link>.
  Please check if everything is ok regarding UX.
  \`\`\`

  # NZZ 
  * Check if the downstream integration branch of the **PREVIOUS** release are in a correct state
    * [ ] Rebase the downstream integration branch (nzz)
    * [ ] Set the upstream version in the downstream branch to the correct version [editor](https://github.com/upfrontIO/livingdocs-editor/releases)/[server](https://github.com/upfrontIO/livingdocs-server/releases)
    * [ ] Check and update the integration notes (e.g. https://github.com/nzzdev/livingdocs-api/pull/3566#issue-173435126)
  * [ ] [Create downstream integration](https://github.com/upfrontIO/team/blob/master/How-We-Work/Release-Process/Details/Integration-Branches.md) branches of the next release (nzz)
    \`\`\`
    npx @livingdocs/release-tools@latest create-downstream-release-branch
    \`\`\`
  * [ ] Update livingdocs-integration.json of the [server](https://github.com/upfrontIO/livingdocs-server/blob/master/livingdocs-integration.json)/[editor](https://github.com/upfrontIO/livingdocs-editor/blob/master/livingdocs-integration.json)/[framework](https://github.com/upfrontIO/livingdocs-framework/blob/master/livingdocs-integration.json)
    * attention: the \`defaultBranch\` in livingdocs-integration.json of the release branch in the framework must be set to the current release after creating the release branch e.g. [example](https://github.com/livingdocsIO/livingdocs-framework/blob/release-2020-05/livingdocs-integration.json#L4)
  
  # Testing (Upstream)
    * [ ] Test the upstream and set the state to [Testrail](https://livingdocs.testrail.io/)
    * [ ] Add Bugs to the [Bug Dashboard](https://github.com/livingdocsIO/livingdocs-planning/projects/56)

  # Announce Release (freeze +7 days)
  * [ ] Get a Webinar date and link from Gabriel (add this to the release mail later)
  * [ ] Inform the team via slack that the release is ready in #announcements
    \`\`\`
    The release \`${releaseName}\` is ready.
    I will merge the release-notes and do the communication with the customers.
    \`\`\`
    * [ ] merge the [release-notes](https://github.com/upfrontIO/livingdocs-release-notes) and the [documentation](https://github.com/upfrontIO/livingdocs)
    * [ ] communicate release to customers via [Campaign Monitor](https://livingdocsag.createsend.com/)
  `
}

module.exports = {
  getBody: getBody
}
