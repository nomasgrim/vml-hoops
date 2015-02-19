<div ng-controller="PlayersListCtrl">
  <ul>
    <li ng-repeat="player in players">
      <h2>{{player.name}}</h2>
      <p>{{player.email}}</p>
    </li>
  </ul>
  <p>number of players {{players.length}}</p>
</div>

