## accordion-web-part

Sample web part which demonstrates how to creates an accordion that looks good in SharePoint. Written in response to StackExchange question [How make accordion detail list with UI fabric react](https://sharepoint.stackexchange.com/questions/268362/how-make-accordion-detail-list-with-ui-fabric-react).

Accordion look and feel inspired by [this Microsoft site](https://www.microsoft.com/en-us/home-use-program/frequently-asked-questions)

![Accordion Sample](assets/AccordionSample.gif)

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO
