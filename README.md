#### [WORK IN PROGRESS]

[![Build Status](https://travis-ci.org/Innovaccer/angular-wizard.svg?branch=master)](https://travis-ci.org/Innovaccer/angular-wizard)

[![Coverage Status](https://coveralls.io/repos/github/Innovaccer/angular-wizard/badge.svg?branch=master)](https://coveralls.io/github/Innovaccer/angular-wizard?branch=master)

# `angular-wizard` — the multistep form
It's a wizard package to make **Multistep view** and **Multistep forms**.

## Featues
- Simple Directive flow.
- Easy validation for forms.
- Pass your template, scope and controller.

### Prerequisites
- Angular JS 1.5.x

### Uses

#### Setting it up
```
<form-wizard steps="steps">
  <steps></steps>
  <control-panel></control-panel>
</form-wizard>
```

You can remove steps or control panel if you want to customize it.

Pass steps as follows:
```
$scope.steps = [{
  name: 'Profile',
  templateUrl : 'profile.html',
  controller: 'ProfileController',
  scope : $scope
},
{
  name: 'Interests',
  template : '<h1>form-interests</h1>'
},
{
  name: 'Submit',
  template : '<h1>form-submit</h1>',
  controller: 'ProfileController',
  scope : $scope
}
];
```

#### Getting Data
pass `$scope.model` object to bind your data to `wizardService`. You can get your data by accessing `wizardService.data`.

#### Clone `angular-module-boilerplate`

Clone the `angular-wizard` repository using git:

```
git clone https://github.com/innovaccer/angular-wizard.git
cd angular-wizard
```


### Install Dependencies

```
npm install
```

###  Test

```js
  npm run test
```
