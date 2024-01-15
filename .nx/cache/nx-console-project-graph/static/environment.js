window.exclude = [];
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';

  window.appConfig = {
    showDebugger: false,
    showExperimentalFeatures: false,
    workspaces: [
      {
        id: 'local',
        label: 'local',
        projectGraphUrl: 'project-graph.json',
        taskGraphUrl: 'task-graph.json'
      }
    ],
    defaultWorkspaceId: 'local',
  };
  window.projectGraphResponse = {"hash":"4ed1a9a26fd2f6356c6a1e80f5c35dfc3b9695a531d373b108cef813b9d118a4","projects":[{"name":".vercel","type":"lib","data":{"name":".vercel","root":".vercel","orgId":"RIvFqBNFQxVtTatHDqV53nxg","projectId":"prj_7g1FveWkUDYLG0JdZP2s3OqsvZa3","implicitDependencies":[],"targets":{},"tags":[]}},{"name":"ScalableUI","type":"app","data":{"root":".","sourceRoot":"src","name":"ScalableUI","projectType":"application","targets":{"ng":{"executor":"nx:run-script","options":{"script":"ng"},"configurations":{}},"start":{"executor":"nx:run-script","options":{"script":"start"},"configurations":{}},"build":{"dependsOn":["^build"],"inputs":["production","^production"],"executor":"@angular-devkit/build-angular:browser","options":{"outputPath":"dist/ScalableUI/browser","index":"src/index.html","main":"src/main.ts","polyfills":["zone.js"],"tsConfig":"tsconfig.app.json","assets":["src/favicon.ico","src/assets"],"styles":["@angular/material/prebuilt-themes/deeppurple-amber.css","src/styles.css"],"scripts":[],"aot":true},"configurations":{"production":{"budgets":[{"type":"initial","maximumWarning":"10mb","maximumError":"10mb"},{"type":"anyComponentStyle","maximumWarning":"2kb","maximumError":"4mb"}],"outputHashing":"all"},"development":{"buildOptimizer":false,"optimization":false,"vendorChunk":true,"extractLicenses":false,"sourceMap":true,"namedChunks":true},"staging":{"budgets":[{"type":"initial","maximumWarning":"500kb","maximumError":"1mb"},{"type":"anyComponentStyle","maximumWarning":"2kb","maximumError":"4kb"}],"outputHashing":"all"}},"defaultConfiguration":"production","outputs":["{options.outputPath}"]},"build:development":{"executor":"nx:run-script","options":{"script":"build:development"},"configurations":{}},"build:staging":{"executor":"nx:run-script","options":{"script":"build:staging"},"configurations":{}},"build:production":{"executor":"nx:run-script","options":{"script":"build:production"},"configurations":{}},"test":{"inputs":["default","^production"],"executor":"@angular-devkit/build-angular:karma","options":{"polyfills":["zone.js","zone.js/testing"],"tsConfig":"tsconfig.spec.json","assets":["src/favicon.ico","src/assets"],"styles":["@angular/material/prebuilt-themes/deeppurple-amber.css","src/styles.css"],"scripts":[]},"configurations":{}},"test:watch":{"executor":"nx:run-script","options":{"script":"test:watch"},"configurations":{}},"test:ci":{"executor":"nx:run-script","options":{"script":"test:ci"},"configurations":{}},"dev:ssr":{"executor":"nx:run-script","options":{"script":"dev:ssr"},"configurations":{}},"serve:ssr":{"executor":"nx:run-script","options":{"script":"serve:ssr"},"configurations":{}},"build:ssr":{"executor":"nx:run-script","options":{"script":"build:ssr"},"configurations":{}},"prerender":{"executor":"@nguniversal/builders:prerender","options":{"routes":["/"]},"configurations":{"production":{"browserTarget":"ScalableUI:build:production","serverTarget":"ScalableUI:server:production"},"staging":{"browserTarget":"ScalableUI:build:staging","serverTarget":"ScalableUI:server:staging"},"development":{"browserTarget":"ScalableUI:build:development","serverTarget":"ScalableUI:server:development"}},"defaultConfiguration":"production"},"nx-release-publish":{"dependsOn":["^nx-release-publish"],"executor":"@nx/js:release-publish","options":{},"configurations":{}},"serve":{"executor":"@angular-devkit/build-angular:dev-server","configurations":{"production":{"browserTarget":"ScalableUI:build:production"},"development":{"browserTarget":"ScalableUI:build:development"},"staging":{"browserTarget":"ScalableUI:build:staging"}},"defaultConfiguration":"development","options":{}},"extract-i18n":{"executor":"@angular-devkit/build-angular:extract-i18n","options":{"browserTarget":"ScalableUI:build"},"configurations":{}},"server":{"inputs":["production","^production"],"executor":"@angular-devkit/build-angular:server","options":{"outputPath":"dist/ScalableUI/server","main":"server.ts","tsConfig":"tsconfig.server.json","externalDependencies":[]},"configurations":{"production":{"outputHashing":"media"},"staging":{},"development":{"buildOptimizer":false,"optimization":false,"sourceMap":true,"extractLicenses":false,"vendorChunk":true}},"defaultConfiguration":"development","outputs":["{options.outputPath}"]},"serve-ssr":{"executor":"@nguniversal/builders:ssr-dev-server","configurations":{"development":{"browserTarget":"ScalableUI:build:development","serverTarget":"ScalableUI:server:development"},"staging":{"browserTarget":"ScalableUI:build:staging","serverTarget":"ScalableUI:server:staging"},"production":{"browserTarget":"ScalableUI:build:production","serverTarget":"ScalableUI:server:production"}},"defaultConfiguration":"development","options":{}}},"$schema":"node_modules/nx/schemas/project-schema.json","generators":{},"prefix":"app","implicitDependencies":[],"tags":[]}}],"dependencies":{".vercel":[],"ScalableUI":[]},"fileMap":{".vercel":[{"file":".vercel/README.txt","hash":"14131471887446248118"},{"file":".vercel/project.json","hash":"8583772199908901305"}],"ScalableUI":[{"file":".dockerignore","hash":"11197256480552145717"},{"file":".editorconfig","hash":"6686520031028425313"},{"file":".github/workflows/deploy.yml","hash":"5154426358869318146"},{"file":".github/workflows/deploy_to_qa.yml","hash":"9417692084824724827"},{"file":".github/workflows/deploy_to_staging.yml","hash":"2542436287980737848"},{"file":".github/workflows/main.yml","hash":"8590048237658170978"},{"file":".github/workflows/qa_Deployment.sh","hash":"8144474973414968261"},{"file":".github/workflows/scalable-ui.yml","hash":"9771842078657379418"},{"file":".github/workflows/staging_Deployment.sh","hash":"8144474973414968261"},{"file":".gitignore","hash":"13044518069027839699"},{"file":".nx/cache/d/daemon.log","hash":"11794714081101469392"},{"file":".nx/cache/nx-console-project-graph/project-graph.html","hash":"17036869540637447991"},{"file":".nx/cache/nx-console-project-graph/static/3rdpartylicenses.txt","hash":"5667550289807473445"},{"file":".nx/cache/nx-console-project-graph/static/environment.js","hash":"483147636151973057"},{"file":".nx/cache/nx-console-project-graph/static/favicon.ico","hash":"9303420814833116677"},{"file":".nx/cache/nx-console-project-graph/static/main.js","hash":"13551439496520482047","deps":[["npm:util","dynamic"]]},{"file":".nx/cache/nx-console-project-graph/static/polyfills.js","hash":"5617236864114375205"},{"file":".nx/cache/nx-console-project-graph/static/runtime.js","hash":"9652903316845995179"},{"file":".nx/cache/nx-console-project-graph/static/styles.css","hash":"2125456314194136822"},{"file":".nx/cache/nx-console-project-graph/static/styles.js","hash":"13596360365094399219"},{"file":".vscode/extensions.json","hash":"12343942279124280405"},{"file":".vscode/launch.json","hash":"4815948323043747099"},{"file":".vscode/tasks.json","hash":"5336636969995539451"},{"file":"Dockerfile","hash":"14891904426249283376"},{"file":"README.md","hash":"14995299826780778706"},{"file":"docker-compose.yml","hash":"3925915079770532350"},{"file":"nx.json","hash":"700872760737908856"},{"file":"package-lock.json","hash":"6356197516181127205"},{"file":"package.json","hash":"16898765493672514975","deps":["npm:@angular/animations","npm:@angular/cdk","npm:@angular/common","npm:@angular/compiler","npm:@angular/core","npm:@angular/forms","npm:@angular/material","npm:@angular/platform-browser","npm:@angular/platform-browser-dynamic","npm:@angular/platform-server","npm:@angular/router","npm:@ngrx/component","npm:@ngrx/data","npm:@ngrx/store","npm:@nguniversal/express-engine","npm:express","npm:ngx-isr","npm:rxjs","npm:tslib","npm:zone.js","npm:@angular-devkit/build-angular","npm:@angular-devkit/core","npm:@angular-devkit/schematics","npm:@angular/cli","npm:@angular/compiler-cli","npm:@nguniversal/builders","npm:@nx/angular","npm:@nx/workspace","npm:@schematics/angular","npm:@types/express","npm:@types/jasmine","npm:@types/jest","npm:@types/node","npm:jasmine-core","npm:jest","npm:jest-preset-angular","npm:nx","npm:nx-cloud","npm:typescript"]},{"file":"project.json","hash":"14110496285453010586"},{"file":"server.ts","hash":"4894814988928584718","deps":["npm:zone.js","npm:@angular/common","npm:@nguniversal/express-engine","npm:express","npm:node:fs","npm:node:path"]},{"file":"setup-jest.ts","hash":"15079892018035281240","deps":["npm:jest-preset-angular","npm:@angular/platform-browser-dynamic","npm:@angular/core"]},{"file":"src/app/app-routing.module.ts","hash":"14887307865988352838","deps":["npm:@angular/core","npm:@angular/router"]},{"file":"src/app/app.component.css","hash":"3244421341483603138"},{"file":"src/app/app.component.html","hash":"15840746965078227419"},{"file":"src/app/app.component.spec.ts","hash":"2261384623612974736","deps":["npm:@angular/core","npm:@angular/router"]},{"file":"src/app/app.component.ts","hash":"18051077450903655283","deps":["npm:@angular/core"]},{"file":"src/app/app.module.ts","hash":"15118069998118364077","deps":["npm:@angular/core","npm:@angular/platform-browser","npm:@angular/common","npm:@ngrx/store","npm:@angular/material"]},{"file":"src/app/app.server.module.ts","hash":"949808916119591617","deps":["npm:@angular/core","npm:@angular/platform-server","npm:@angular/platform-browser"]},{"file":"src/app/footer/footer.component.css","hash":"3244421341483603138"},{"file":"src/app/footer/footer.component.html","hash":"8968952222854358843"},{"file":"src/app/footer/footer.component.spec.ts","hash":"1944692066901072230","deps":["npm:@angular/core"]},{"file":"src/app/footer/footer.component.ts","hash":"9444302710946122126","deps":["npm:@angular/core"]},{"file":"src/app/header/header.component.css","hash":"3244421341483603138"},{"file":"src/app/header/header.component.html","hash":"9421487260993322154"},{"file":"src/app/header/header.component.spec.ts","hash":"372101361241028373","deps":["npm:@angular/core"]},{"file":"src/app/header/header.component.ts","hash":"5581491389441948013","deps":["npm:@angular/core"]},{"file":"src/app/header/header.directive.spec.ts","hash":"4017535096818852807"},{"file":"src/app/header/header.directive.ts","hash":"14449594412048581748","deps":["npm:@angular/core"]},{"file":"src/app/main.directive.spec.ts","hash":"7813043316110872180"},{"file":"src/app/main.directive.ts","hash":"5415285619556450555","deps":["npm:@angular/core"]},{"file":"src/assets/.gitkeep","hash":"3244421341483603138"},{"file":"src/baseApi/baseapi.service.ts","hash":"2745521636472591928","deps":["npm:@angular/core","npm:@angular/common"]},{"file":"src/core/components/login/login.component.css","hash":"3244421341483603138"},{"file":"src/core/components/login/login.component.html","hash":"6601502161338260424"},{"file":"src/core/components/login/login.component.spec.ts","hash":"15222502735042189921","deps":["npm:@angular/core"]},{"file":"src/core/components/login/login.component.ts","hash":"16115914424264790762","deps":["npm:@angular/core","npm:@ngrx/store","npm:@angular/compiler"]},{"file":"src/core/components/register/register.component.css","hash":"3244421341483603138"},{"file":"src/core/components/register/register.component.html","hash":"7186589860817910059"},{"file":"src/core/components/register/register.component.spec.ts","hash":"6877038197976814006","deps":["npm:@angular/core"]},{"file":"src/core/components/register/register.component.ts","hash":"6890417692680740232","deps":["npm:@angular/core","npm:@angular/forms","npm:@ngrx/component","npm:rxjs"]},{"file":"src/core/core-routing.module.ts","hash":"2749073486231934930","deps":["npm:@angular/core","npm:@angular/router"]},{"file":"src/core/core.module.ts","hash":"10139382425316335901","deps":["npm:@angular/core","npm:@angular/common","npm:@angular/forms","npm:@angular/material","npm:@ngrx/store"]},{"file":"src/core/coredirectives/dom.directive.ts","hash":"11378808770828500629","deps":["npm:@angular/core"]},{"file":"src/core/services/auth.service.spec.ts","hash":"10398292043072898590"},{"file":"src/core/services/auth.service.ts","hash":"15031681352585897798","deps":["npm:@angular/core","npm:@angular/common","npm:rxjs"]},{"file":"src/environments/environment.dev.ts","hash":"8349120137398330812"},{"file":"src/environments/environment.prod.ts","hash":"3183948234217956289"},{"file":"src/environments/environment.qa.ts","hash":"2968418568810291219"},{"file":"src/favicon.ico","hash":"3464744996580215640"},{"file":"src/feature/components/product/product.component.css","hash":"4055606894390288348"},{"file":"src/feature/components/product/product.component.html","hash":"15917016183261709522"},{"file":"src/feature/components/product/product.component.spec.ts","hash":"2997354327677614086","deps":["npm:@angular/core"]},{"file":"src/feature/components/product/product.component.ts","hash":"3572541769292319061","deps":["npm:@angular/core"]},{"file":"src/feature/feature-routing.module.ts","hash":"16955327604367397647","deps":["npm:@angular/core","npm:@angular/router"]},{"file":"src/feature/feature.module.ts","hash":"14978174481212312469","deps":["npm:@angular/core","npm:@angular/common","npm:@angular/material"]},{"file":"src/feature/services/feature.service.ts","hash":"16688230337465033559","deps":["npm:@angular/common","npm:@angular/core","npm:rxjs"]},{"file":"src/index.html","hash":"10905419692924980119"},{"file":"src/main.server.ts","hash":"6133169593449748856"},{"file":"src/main.ts","hash":"12246588107753938993","deps":["npm:@angular/platform-browser-dynamic"]},{"file":"src/objectModels/location.ts","hash":"13670836916326373601"},{"file":"src/objectModels/product.ts","hash":"2391469074714427519"},{"file":"src/objectModels/user.ts","hash":"16900944773773334918"},{"file":"src/objectModels/userinterface.ts","hash":"16366568647032914863"},{"file":"src/shared/services/geolocation.service.ts","hash":"3860085892256766434","deps":["npm:@angular/core","npm:rxjs"]},{"file":"src/shared/services/logger.service.ts","hash":"18182012523920633020","deps":["npm:@angular/core","npm:@ngrx/data"]},{"file":"src/shared/services/shared.service.ts","hash":"18089767983254933079","deps":["npm:@angular/core","npm:rxjs"]},{"file":"src/shared/shared-routing.module.ts","hash":"17092762471815255853","deps":["npm:@angular/core","npm:@angular/router"]},{"file":"src/shared/shared.module.ts","hash":"15060910601173307833","deps":["npm:@angular/core","npm:@angular/common"]},{"file":"src/styles.css","hash":"9525514396149276363"},{"file":"tsconfig.app.json","hash":"17337579397915052279"},{"file":"tsconfig.json","hash":"18287715015440975840"},{"file":"tsconfig.server.json","hash":"5896860408690188676"},{"file":"tsconfig.spec.json","hash":"8535654255680754075"},{"file":".nx/cache/file-map.json","hash":"4851663448884196333"},{"file":".nx/cache/project-graph.json","hash":"5316367869310880238"},{"file":".nx/cache/lockfile.hash","hash":"789810208606981063"},{"file":".nx/cache/parsed-lock-file.json","hash":"18031244103962242649"}]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};
    window.taskGraphResponse = {"taskGraphs":{"ScalableUI:ng":{"roots":["ScalableUI:ng"],"tasks":{"ScalableUI:ng":{"id":"ScalableUI:ng","target":{"project":"ScalableUI","target":"ng"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:ng":[]}},"ScalableUI:start":{"roots":["ScalableUI:start"],"tasks":{"ScalableUI:start":{"id":"ScalableUI:start","target":{"project":"ScalableUI","target":"start"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:start":[]}},"ScalableUI:build":{"roots":["ScalableUI:build:production"],"tasks":{"ScalableUI:build:production":{"id":"ScalableUI:build:production","target":{"project":"ScalableUI","target":"build","configuration":"production"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:build:production":[]}},"ScalableUI:build:production":{"roots":["ScalableUI:build:production"],"tasks":{"ScalableUI:build:production":{"id":"ScalableUI:build:production","target":{"project":"ScalableUI","target":"build:production"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:build:production":[]}},"ScalableUI:build:development":{"roots":["ScalableUI:build:development"],"tasks":{"ScalableUI:build:development":{"id":"ScalableUI:build:development","target":{"project":"ScalableUI","target":"build:development"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:build:development":[]}},"ScalableUI:build:staging":{"roots":["ScalableUI:build:staging"],"tasks":{"ScalableUI:build:staging":{"id":"ScalableUI:build:staging","target":{"project":"ScalableUI","target":"build:staging"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:build:staging":[]}},"ScalableUI:test":{"roots":["ScalableUI:test"],"tasks":{"ScalableUI:test":{"id":"ScalableUI:test","target":{"project":"ScalableUI","target":"test"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:test":[]}},"ScalableUI:test:watch":{"roots":["ScalableUI:test:watch"],"tasks":{"ScalableUI:test:watch":{"id":"ScalableUI:test:watch","target":{"project":"ScalableUI","target":"test:watch"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:test:watch":[]}},"ScalableUI:test:ci":{"roots":["ScalableUI:test:ci"],"tasks":{"ScalableUI:test:ci":{"id":"ScalableUI:test:ci","target":{"project":"ScalableUI","target":"test:ci"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:test:ci":[]}},"ScalableUI:dev:ssr":{"roots":["ScalableUI:dev:ssr"],"tasks":{"ScalableUI:dev:ssr":{"id":"ScalableUI:dev:ssr","target":{"project":"ScalableUI","target":"dev:ssr"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:dev:ssr":[]}},"ScalableUI:serve:ssr":{"roots":["ScalableUI:serve:ssr"],"tasks":{"ScalableUI:serve:ssr":{"id":"ScalableUI:serve:ssr","target":{"project":"ScalableUI","target":"serve:ssr"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:serve:ssr":[]}},"ScalableUI:build:ssr":{"roots":["ScalableUI:build:ssr"],"tasks":{"ScalableUI:build:ssr":{"id":"ScalableUI:build:ssr","target":{"project":"ScalableUI","target":"build:ssr"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:build:ssr":[]}},"ScalableUI:prerender":{"roots":["ScalableUI:prerender:production"],"tasks":{"ScalableUI:prerender:production":{"id":"ScalableUI:prerender:production","target":{"project":"ScalableUI","target":"prerender","configuration":"production"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:prerender:production":[]}},"ScalableUI:prerender:production":{"roots":["ScalableUI:prerender:production"],"tasks":{"ScalableUI:prerender:production":{"id":"ScalableUI:prerender:production","target":{"project":"ScalableUI","target":"prerender","configuration":"production"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:prerender:production":[]}},"ScalableUI:prerender:staging":{"roots":["ScalableUI:prerender:staging"],"tasks":{"ScalableUI:prerender:staging":{"id":"ScalableUI:prerender:staging","target":{"project":"ScalableUI","target":"prerender","configuration":"staging"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:prerender:staging":[]}},"ScalableUI:prerender:development":{"roots":["ScalableUI:prerender:development"],"tasks":{"ScalableUI:prerender:development":{"id":"ScalableUI:prerender:development","target":{"project":"ScalableUI","target":"prerender","configuration":"development"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:prerender:development":[]}},"ScalableUI:nx-release-publish":{"roots":["ScalableUI:nx-release-publish"],"tasks":{"ScalableUI:nx-release-publish":{"id":"ScalableUI:nx-release-publish","target":{"project":"ScalableUI","target":"nx-release-publish"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:nx-release-publish":[]}},"ScalableUI:serve":{"roots":["ScalableUI:serve:development"],"tasks":{"ScalableUI:serve:development":{"id":"ScalableUI:serve:development","target":{"project":"ScalableUI","target":"serve","configuration":"development"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:serve:development":[]}},"ScalableUI:serve:production":{"roots":["ScalableUI:serve:production"],"tasks":{"ScalableUI:serve:production":{"id":"ScalableUI:serve:production","target":{"project":"ScalableUI","target":"serve","configuration":"production"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:serve:production":[]}},"ScalableUI:serve:development":{"roots":["ScalableUI:serve:development"],"tasks":{"ScalableUI:serve:development":{"id":"ScalableUI:serve:development","target":{"project":"ScalableUI","target":"serve","configuration":"development"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:serve:development":[]}},"ScalableUI:serve:staging":{"roots":["ScalableUI:serve:staging"],"tasks":{"ScalableUI:serve:staging":{"id":"ScalableUI:serve:staging","target":{"project":"ScalableUI","target":"serve","configuration":"staging"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:serve:staging":[]}},"ScalableUI:extract-i18n":{"roots":["ScalableUI:extract-i18n"],"tasks":{"ScalableUI:extract-i18n":{"id":"ScalableUI:extract-i18n","target":{"project":"ScalableUI","target":"extract-i18n"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:extract-i18n":[]}},"ScalableUI:server":{"roots":["ScalableUI:server:development"],"tasks":{"ScalableUI:server:development":{"id":"ScalableUI:server:development","target":{"project":"ScalableUI","target":"server","configuration":"development"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:server:development":[]}},"ScalableUI:server:production":{"roots":["ScalableUI:server:production"],"tasks":{"ScalableUI:server:production":{"id":"ScalableUI:server:production","target":{"project":"ScalableUI","target":"server","configuration":"production"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:server:production":[]}},"ScalableUI:server:staging":{"roots":["ScalableUI:server:staging"],"tasks":{"ScalableUI:server:staging":{"id":"ScalableUI:server:staging","target":{"project":"ScalableUI","target":"server","configuration":"staging"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:server:staging":[]}},"ScalableUI:server:development":{"roots":["ScalableUI:server:development"],"tasks":{"ScalableUI:server:development":{"id":"ScalableUI:server:development","target":{"project":"ScalableUI","target":"server","configuration":"development"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:server:development":[]}},"ScalableUI:serve-ssr":{"roots":["ScalableUI:serve-ssr:development"],"tasks":{"ScalableUI:serve-ssr:development":{"id":"ScalableUI:serve-ssr:development","target":{"project":"ScalableUI","target":"serve-ssr","configuration":"development"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:serve-ssr:development":[]}},"ScalableUI:serve-ssr:development":{"roots":["ScalableUI:serve-ssr:development"],"tasks":{"ScalableUI:serve-ssr:development":{"id":"ScalableUI:serve-ssr:development","target":{"project":"ScalableUI","target":"serve-ssr","configuration":"development"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:serve-ssr:development":[]}},"ScalableUI:serve-ssr:staging":{"roots":["ScalableUI:serve-ssr:staging"],"tasks":{"ScalableUI:serve-ssr:staging":{"id":"ScalableUI:serve-ssr:staging","target":{"project":"ScalableUI","target":"serve-ssr","configuration":"staging"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:serve-ssr:staging":[]}},"ScalableUI:serve-ssr:production":{"roots":["ScalableUI:serve-ssr:production"],"tasks":{"ScalableUI:serve-ssr:production":{"id":"ScalableUI:serve-ssr:production","target":{"project":"ScalableUI","target":"serve-ssr","configuration":"production"},"projectRoot":".","overrides":{}}},"dependencies":{"ScalableUI:serve-ssr:production":[]}}},"errors":{}};
    