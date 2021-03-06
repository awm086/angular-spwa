(function () {
  'use strict';
  angular.module("dTreeApp")
    .constant('ApiBasePath', ' http://localhost:3001')
    .service('TreeData', TreeData);


  TreeData.$inject = ['$http', "ApiBasePath"];
  function TreeData($http, ApiBasePath) {
    var service = this;

    service.data = function () {

      var data = [{
        "root": true,
        "label": null,
        "question": "What product category?",
        "nodes": [
          {
            "label": "Clothes",
            "question": "What type of clothing?",
            "nodes": [
              {
                "label": "Jeans",
                "question": "Color of jeans?",
                "nodes": [
                  {
                    "label": "Blue",
                    "question": null,
                    "nodes": null
                  },
                  {
                    "label": "Black",
                    "question": null,
                    "nodes": null
                  },
                  {
                    "label": "White",
                    "question": null,
                    "nodes": null
                  }
                ]
              },
              {
                "label": "Shirt",
                "question": "Type of shirt?",
                "nodes": [
                  {
                    "label": "T-Shirt",
                    "question": "Color of T-shirt?",
                    "nodes": [
                      {
                        "label": "Red",
                        "question": null,
                        "nodes": null
                      },
                      {
                        "label": "Green",
                        "question": null,
                        "nodes": null
                      },
                      {
                        "label": "Black",
                        "question": "Logo?",
                        "nodes": [
                          {
                            "label": "Rock band",
                            "question": null,
                            "nodes": null
                          },
                          {
                            "label": "TV show",
                            "question": null,
                            "nodes": null
                          },
                          {
                            "label": "No logo",
                            "question": null,
                            "nodes": null
                          }
                        ]
                      },
                      {
                        "label": "Orange",
                        "question": null,
                        "nodes": null
                      }
                    ]
                  },
                  {
                    "label": "Hoodie",
                    "question": "Color of hoodie?",
                    "nodes": [
                      {
                        "label": "Gray",
                        "question": null,
                        "nodes": null
                      },
                      {
                        "label": "Blue",
                        "question": null,
                        "nodes": [
                          {
                            "label": "TV show",
                            "question": null,
                            "nodes": null
                          },
                          {
                            "label": "No logo",
                            "question": null,
                            "nodes": null
                          }
                        ]
                      },
                      {
                        "label": "Green",
                        "question": null,
                        "nodes": null
                      },
                      {
                        "label": "Pink",
                        "question": null,
                        "nodes": null
                      },
                      {
                        "label": "Brown",
                        "question": null,
                        "nodes": null
                      },
                      {
                        "label": "Black",
                        "question": null,
                        "nodes": null
                      },
                      {
                        "label": "Red",
                        "question": null,
                        "nodes": null
                      }
                    ]
                  },
                  {
                    "label": "White",
                    "question": null,
                    "nodes": null
                  }
                ]
              },
              {
                "label": "Hat",
                "question": "Type of hat?",
                "nodes": [
                  {
                    "label": "Stetson",
                    "question": null,
                    "nodes": null
                  },
                  {
                    "label": "Sombrero",
                    "question": null,
                    "nodes": null
                  }
                ]
              }
            ]
          },
          {
            "label": "Food",
            "question": "Type of food?",
            "nodes": [
              {
                "label": "Ramen noodles",
                "question": null,
                "nodes": null
              },
              {
                "label": "Soda pop",
                "question": "What kind",
                "nodes": [
                  {
                    "label": "Cola",
                    "question": null,
                    "nodes": null
                  },
                  {
                    "label": "Lemon",
                    "question": null,
                    "nodes": null
                  },
                  {
                    "label": "Orange",
                    "question": null,
                    "nodes": null
                  },
                  {
                    "label": "Apple",
                    "question": null,
                    "nodes": null
                  }
                ]
              },
              {
                "label": "Bananas",
                "question": null,
                "nodes": null
              }
            ]
          }
        ]
      }];

      return data;
    };

    // todo this may take an id.
    service.getTreeData = function () {
      return $http({
        Method: 'GET',
        url: (ApiBasePath + "/tree")
      });
    }

  }

})() ;