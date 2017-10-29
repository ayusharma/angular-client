'use strict'

// import apiService from './api.service';

class FormController {
  constructor($scope, $http) {
    'ngInject';

    // angular dependencies
    this.vscope = $scope;
    this.$http = $http;
    this.data = {};
    // this.demographics = {
    //   ages: {},
    //   gender: {},
    //   race: {},
    //   income: {},
    //   education: {}
    // };

    this.demographics= {
        population: 8187,
        state: "Massachusetts",
        county: "Berkshire County",
        ages: {
          '0..4': 0.042995274900647744,
          '5..9': 0.04604624964796445,
          '10..14': 0.05073223393935601,
          '15..19': 0.0645789654848703,
          '20..24': 0.0681853740964421,
          '25..29': 0.051021685389742465,
          '30..34': 0.05281315517726946,
          '35..39': 0.04980911850298839,
          '40..44': 0.05377538567450011,
          '45..49': 0.06514222236129799,
          '50..54': 0.0795756798197578,
          '55..59': 0.08273617673749101,
          '60..64': 0.07669681134023845,
          '65..69': 0.0700081359326595,
          '70..74': 0.04906593234659073,
          '75..79': 0.034554244766404854,
          '80..84': 0.027349250555433864,
          '85..110': 0.03491410332634477
        },
        gender: {
          male: 0.4836499045592515,
          female: 0.5163500954407485
        },
        race: {
          'white': 0.9269330663078512,
          'hispanic': 0.04265888537722565,
          'black': 0.032246456175485806,
          'asian': 0.014816785054917545,
          'native': 0.0031917889664236317,
          'other': 0.001
        },
        income: {
          'mean': 55817,
          'median': 41807,
          '00..10': 0.046,
          '10..15': 0.094,
          '15..25': 0.16399999999999998,
          '25..35': 0.10300000000000001,
          '35..50': 0.192,
          '50..75': 0.15,
          '75..100': 0.13,
          '100..150': 0.085,
          '150..200': 0.024,
          '200..999': 0.013999999999999999
        },
        education: {
          'less_than_hs': 0.09300000000000001,
          hs_degree: 0.439,
          some_college: 0.386,
          bs_degree: 0.08199999999999999
        }
    }

    this.data = {
      population: 1,
        demographics_config: this.demographics
    }
  }

  sayHello() {
    console.log(this.demographics);
    var basePath = "http://10.10.4.38:9000/generate";
    this.$http(
      {
        url: basePath,
        data: JSON.stringify(this.demographics),
        method: 'POST',
        crossDomain: true,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
    .then(function(res){
      console.log(res)
    })
    .catch(function(err){
      console.log(err)
    })
    // this.apiService.send(this.demographics);
  }
}

export default FormController;
