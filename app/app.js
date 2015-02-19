Players = new Mongo.Collection('players');

if (Meteor.isClient) {
  angular.module('app', ['angular-meteor']);

  angular.module('app').controller('PlayersListCtrl', 
    ['$scope', '$meteorCollection',function($scope,$meteorCollection){
      $scope.players = $meteorCollection(Players);

    //end players array object
    }]
  );
}

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     if (Players.find().count() === 0) {

//       var players = [
//         {
//           'name' : 'Jon Cook',
//           'email' : 'Jon.Cook@vml.com'
//         },
//         {
//           'name' : 'Jordan Cochran',
//           'email' : 'Jordan.Cochran@vml.com'
//         },
//         {
//           'name' : 'James Flath',
//           'email' : 'jdf7324@truman.edu'
//         },
//         {
//           'name' : 'Kyle Rogers',
//           'email' : 'Kyle.Rogers@vml.com'
//         },
//         {
//           'name' : 'Brendan Kennedy',
//           'email' : 'Brendan.Kennedy@vml.com'
//         },
//         {
//           'name' : 'Cliff Barendsen',
//           'email' : 'Cliff.Barendsen@vml.com'
//         },
//         {
//           'name' : 'Todd Way',
//           'email' : 'Todd.Way@vml.com'
//         },
//         {
//           'name' : 'Brandon McCormick',
//           'email' : 'Brandon.McCormick@vml.com'
//         },
//         {
//           'name' : 'Brian Yamada',
//           'email' : 'Brian.Yamada@vml.com'
//         },
//         {
//           'name' : 'Rob Hink',
//           'email' : 'Rob.Hink@redfuse.com'
//         },
//         {
//           'name' : 'Bryan Mohr',
//           'email' : 'Bryan.Mohr@vml.com'
//         },
//         {
//           'name' : 'D. Jay Taylor',
//           'email' : 'D.Jay.Taylor@vml.com'
//         },
//         {
//           'name' : 'Jonathan Sharlow',
//           'email' : 'jsharlow@teksystems.com'
//         },
//         {
//           'name' : 'Andy K',
//           'email' : 'andyk.pitts@gmail.com'
//         },
//         {
//           'name' : 'Caleb Newberg',
//           'email' : 'Caleb.Newberg@vml.com'
//         },
//         {
//           'name' : 'Matt Fitzgerald',
//           'email' : 'Matt.Fitzgerald@vml.com'
//         },
//         {
//           'name' : 'Justin Bell',
//           'email' : 'Justin.Bell@vml.com'
//         },
//         {
//           'name' : 'Kyle McDowell',
//           'email' : 'Kyle.McDowell@vml.com'
//         },
//         {
//           'name' : 'Kelly Sands',
//           'email' : 'Kelly.Sands@vml.com'
//         },
//         {
//           'name' : 'Will Angles',
//           'email' : 'Will.Angles@vml.com'
//         },
//         {
//           'name' : 'newquirks@gmail.com',
//           'email' : 'newquirks@gmail.com'
//         },
//         {
//           'name' : 'Alex Ayre',
//           'email' : 'Alex.Ayre@vml.com'
//         },
//         {
//           'name' : 'Jason Caton',
//           'email' : 'Jason.Caton@vml.com'
//         },
//         {
//           'name' : 'Adam Smith',
//           'email' : 'Adam.Smith@vml.com'
//         },
//         {
//           'name' : 'Craig Sizemore',
//           'email' : 'craig.sizemore@gmail.com'
//         },
//         {
//           'name' : 'Jason Bass',
//           'email' : 'Jason.Bass@vml.com'
//         },
//         {
//           'name' : 'Bradley Beach',
//           'email' : 'Bradley.Beach@vml.com'
//         },
//         {
//           'name' : 'Mike Whaley',
//           'email' : 'Mike.Whaley@vml.com'
//         },
//         {
//           'name' : 'Andrew Mirakian',
//           'email' : 'apmirakian@gmail.com'
//         },
//         {
//           'name' : 'Erik Stark',
//           'email' : 'Erik.Stark@vml.com'
//         },
//         {
//           'name' : 'Derek Anderson',
//           'email' : 'Derek.Anderson@vml.com'
//         },
//         {
//           'name' : 'Josh Kell',
//           'email' : 'josh@borntofork.com'
//         },
//         {
//           'name' : 'Kendall Law',
//           'email' : 'kklaw03@gmail.com'
//         },
//         {
//           'name' : 'Bryan Mohr',
//           'email' : 'bryanmohr1@gmail.com'
//         }
//       ];

//       for (var i = 0; i < players.length; i++)
//         Players.insert({name: players[i].name, email: players[i].email});

//     }
//    });
// }
