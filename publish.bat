@echo off
npm version patch && ^
cd "%cd%\projects\ng-condition" && ^
npm version patch && ^
cd "%cd%" && ^
npm run build ng-condition --prod && ^
copy /y "%cd%\README.md" "%cd%\dist\ng-condition\README.md" && ^
copy /y "%cd%\LICENSE" "%cd%\dist\ng-condition\LICENSE" && ^
cd "%cd%\dist\ng-condition" && ^
npm publish --ignore-scripts && ^
cd "%cd%"
pause