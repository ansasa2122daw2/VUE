const error = {
    data: function() {
      return {
        url: window.location.hash
      };
    },
    template: `
    <div>
      <p>URL no encaminada : {{url}} </p>
    </div>
    `
  };
  
  const principal = {
    template: `
    <div class="main">
    <div class="puntuaciones">
        <table id="table">
            <tr>
                <th>jugador</th>
                <th>tiempo</th>
                <th>errores</th>
                <th>dificultad</th>
            </tr>
            <tr>
                <td>ben isshowspeed</td>
                <td>19:05</td>
                <td>5</td>
                <td>fácil</td>
            </tr>
        </table>
    </div>
    `
  };
  const facil = {
    template: `
      <p>Facil</p>
    `
  };
  const medio = {
    template: `
      <p>Medio</p>
    `
  };
  const dificil = {
    template: `
      <p>Díficil</p>
    `
  };  
  const rutes = {
    '#/': principal,
    '#/facil': facil,
    '#/medio': medio,
    '#/dificil': dificil
  };
  
  var routing = new Vue({
    el: '#routing',
    data: {
      rutaActual: window.location.hash,
      rutes: rutes
    },
    methods: {
      navegar: function($event) {
        this.rutaActual = $event.target.hash;
      }
    },
    computed: {
      vistaActual: function() {
        return this.rutes[this.rutaActual] || error;
      }
    },
    template: `
    <div>
    <div v-bind:is="vistaActual">        
      </div>
    <div class="dificultad">
        <h2>Elige dificultad</h2>
        <div class="botones">
            <a href="#/facil" v-on:click="navegar" id="buton1">Fácil</a>
            <a href="#/medio" v-on:click="navegar" id="buton2">Medio</a>
            <a href="#/dificil" v-on:click="navegar" id="buton3">Díficil</a>
            <a href="#/" v-on:click="navegar" id="buton4">Menú</a>
        </div>
    </div>
    
      </div>
    `
  });

  /*
  FÁCIL
  
  let sudoku = [9,6,3,1,7,4,2,5,8,
                1,7,8,3,2,5,6,4,9,
                2,5,4,6,8,9,7,3,1,
                8,2,1,4,3,7,5,9,6,
                4,9,6,8,5,2,3,1,7,
                7,3,5,9,6,1,8,5,4,
                5,8,9,7,1,3,4,6,2,
                3,1,7,2,4,6,9,8,5,
                6,4,2,5,9,8,1,7,3];

  let sudokuResolver = [0,6,0,1,0,4,0,5,0,
                        0,0,8,3,0,5,6,0,0,
                        2,0,0,0,0,0,0,0,1,
                        8,0,0,4,0,7,0,0,6,
                        0,0,6,0,0,0,3,0,0,
                        7,0,0,0,0,0,0,0,2,
                        0,0,7,2,0,6,9,0,0,
                        0,4,0,5,0,8,0,7,0];
*/

/* MEDIO

  let sudoku = [5,3,9,1,4,6,8,7,2,
                8,4,7,9,2,5,3,1,6,
                2,6,1,3,7,8,9,5,4,
                6,7,5,4,8,1,2,9,3,
                9,1,2,6,3,7,5,4,8,
                4,8,3,5,9,2,7,6,1,
                3,2,6,7,1,9,4,8,5,
                1,9,4,8,5,3,6,2,7];

  let sudokuResolver = [0,0,9,0,4,0,0,0,0,
                        0,0,0,0,0,5,3,1,0,
                        0,6,1,0,0,8,0,5,0,
                        0,0,5,4,0,0,2,0,3,
                        0,1,0,0,0,7,0,0,8,
                        0,8,0,0,0,0,7,6,0,
                        3,0,6,0,1,9,4,0,0,
                        7,0,0,0,0,0,0,0,0,
                        0,0,4,0,5,0,6,2,7];
*/

/* DIFICIL

  let sudoku = [8,1,2,7,5,3,6,4,9,
                9,4,3,6,8,2,1,7,5,
                6,7,5,4,9,1,2,8,3,
                1,5,4,2,3,7,8,9,6,
                3,6,9,8,4,5,7,2,1,
                2,8,7,1,6,9,5,3,4,
                5,2,1,9,7,4,3,6,8,
                4,3,8,5,2,6,9,1,7,
                7,9,6,3,1,8,4,5,2];

  let sudokuResolver = [8,0,0,0,0,0,0,0,0,
                        0,0,3,6,0,0,0,0,0,
                        0,7,0,0,9,0,2,0,0,
                        0,5,0,0,0,7,0,0,0,
                        0,0,0,0,4,5,7,0,0,
                        0,0,0,1,0,0,0,3,4,
                        0,0,1,0,0,0,0,6,8,
                        4,3,8,5,0,0,0,1,7,
                        0,9,0,0,0,0,4,0,0];
*/