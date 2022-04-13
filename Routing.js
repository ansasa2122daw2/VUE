const error = {
	data: function () {
		return {
			url: window.location.hash,
		};
	},
	template: `
    <div class="main">
    <div class="puntuaciones">
        <table id="table" >
            <tr>
                <th>jugador</th>
                <th>tiempo</th>
                <th>errores</th>
                <th>dificultad</th>
            </tr>
            <tr v-for="puntu in puntuaciones">
                <td>{{puntu.nombreJugador}}</td>
                <td>{{puntu.errores}}</td>
                <td>{{puntu.tiempo}}</td>
                <td>{{puntu.dificultad}}</td>
            </tr>
        </table>
    </div>
    `,
};

const principal = {
	data: function () {
		return {
			puntuaciones: [],
		};
	},
	mounted() {
		let data = JSON.parse(localStorage.getItem("puntuaciones"));
		console.log(data);
		for (let i = 0; i < data.length; i++) {
			this.puntuaciones.push(data[i]);
		}
		console.table("Hola", this.puntuaciones);
	},
	template: `
    <div class="main">
    <div class="puntuaciones">
        <table id="table" >
            <tr>
                <th>jugador</th>
                <th>tiempo</th>
                <th>errores</th>
                <th>dificultad</th>
            </tr>
            <tr v-for="(puntu,i) in puntuaciones" :key="i" >
                <td>{{puntu.nombreJugador}}</td>
                <td>{{puntu.tiempo}}</td>
                <td>{{puntu.errores}}</td>
                <td>{{puntu.dificultad}}</td>
            </tr>
        </table>
    </div>
	</div>
    `,
};

const facil = {
	data: function () {
		return {
			sudoku: [
				{ valor: "", disabled: false },
				{ valor: 6, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 1, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 4, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 5, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 8, disabled: true },
				{ valor: 3, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 5, disabled: true },
				{ valor: 6, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 2, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 1, disabled: true },
				{ valor: 8, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 4, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 7, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 6, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 6, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 3, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 7, disabled: true },
				{ valor: 3, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 9, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 1, disabled: true },
				{ valor: 8, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 5, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 2, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 7, disabled: true },
				{ valor: 2, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 6, disabled: true },
				{ valor: 9, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 4, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 5, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 8, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 7, disabled: true },
				{ valor: "", disabled: false },
			],
			sudokuResuelto: [
				{ valor: 9, disabled: false },
				{ valor: 6, disabled: true },
				{ valor: 3, disabled: false },
				{ valor: 1, disabled: true },
				{ valor: 7, disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 2, disabled: false },
				{ valor: 5, disabled: true },
				{ valor: 8, disabled: false },
				{ valor: 1, disabled: false },
				{ valor: 7, disabled: false },
				{ valor: 8, disabled: true },
				{ valor: 3, disabled: true },
				{ valor: 2, disabled: false },
				{ valor: 5, disabled: true },
				{ valor: 6, disabled: true },
				{ valor: 4, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 2, disabled: true },
				{ valor: 5, disabled: false },
				{ valor: 4, disabled: false },
				{ valor: 6, disabled: false },
				{ valor: 8, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 7, disabled: false },
				{ valor: 3, disabled: false },
				{ valor: 1, disabled: true },
				{ valor: 8, disabled: true },
				{ valor: 2, disabled: false },
				{ valor: 1, disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 3, disabled: false },
				{ valor: 7, disabled: true },
				{ valor: 5, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 6, disabled: true },
				{ valor: 4, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 6, disabled: true },
				{ valor: 8, disabled: false },
				{ valor: 5, disabled: false },
				{ valor: 2, disabled: false },
				{ valor: 3, disabled: true },
				{ valor: 1, disabled: false },
				{ valor: 7, disabled: false },
				{ valor: 7, disabled: true },
				{ valor: 3, disabled: true },
				{ valor: 5, disabled: false },
				{ valor: 9, disabled: true },
				{ valor: 6, disabled: false },
				{ valor: 1, disabled: true },
				{ valor: 8, disabled: true },
				{ valor: 5, disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 5, disabled: true },
				{ valor: 8, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 7, disabled: false },
				{ valor: 1, disabled: false },
				{ valor: 3, disabled: false },
				{ valor: 4, disabled: false },
				{ valor: 6, disabled: false },
				{ valor: 2, disabled: true },
				{ valor: 3, disabled: false },
				{ valor: 1, disabled: false },
				{ valor: 7, disabled: true },
				{ valor: 2, disabled: true },
				{ valor: 4, disabled: false },
				{ valor: 6, disabled: true },
				{ valor: 9, disabled: true },
				{ valor: 8, disabled: false },
				{ valor: 5, disabled: false },
				{ valor: 6, disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 2, disabled: false },
				{ valor: 5, disabled: true },
				{ valor: 9, disabled: false },
				{ valor: 8, disabled: true },
				{ valor: 1, disabled: false },
				{ valor: 7, disabled: true },
				{ valor: 3, disabled: false },
			],
			color: "blue",
			colorVALOR: "solid black",
			show: false,
			cursor: "not-allowed",
			cursorP: "pointer",
			timer: 0,
			timer111: false,
		};
	},
	methods: {
		mostrar: function () {
			this.sudoku = this.sudokuResuelto;
			this.show = true;
		},
		select: function (event) {
			console.log(event);
			this.$refs["input"].forEach((element, index) => {
				let columna = Math.floor(event % 9);
				let fila = Math.floor(event / 9);
				let columnaGrande = Math.floor((event % 9) / 3);
				let filaGrande = Math.floor(event / 9 / 3);

				if (
					index === event || // Casilla a la que se clica
					index % 9 === columna || // Columna chica a la que se clica
					Math.floor(index / 9) === fila || // Fila chica a la que se clica
					(Math.floor((index % 9) / 3) === columnaGrande && Math.floor(index / 9 / 3) === filaGrande)
				) {
					element.classList.value = "selected";
				} else {
					element.classList.value = "";
				}
			});
			if (event.valor != undefined) {
				this.sudoku[event].valor = event.valor;
			}
			console.log(this.sudoku[event]);
		},
		contador() {
			this.timer111 = true;
			interval = setInterval(() => {
				this.timer++;
			}, 1000);
		},
		comprobar() {
			let errores = 0;
			clearInterval(interval);
			for (let i = 0; i < this.sudoku.length; i++) {
				if (this.sudoku[i].valor != this.sudokuResuelto[i].valor) {
					errores++;
				}
			}
			nombreJugador = prompt("Introduce tu nombre: ");
			let puntuacion = new Puntuacion(nombreJugador, errores, this.timer, "Fácil");
			routing.anadirPuntuacion(puntuacion);
			console.log(puntuacion);
			//guardar con local storage puntuacion
		},
	},

	template: `
    <div>
        <div class="sudoku">
            <div class="casilla" v-on:click="select(index)" v-for="(numero,index) in sudoku" :key="index">
                <input type="number" ref="input" oninput="this.value = this.value.replace(/[^1-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" v-model="numero.valor" :disabled="numero.disabled" v-bind:style="[numero.disabled ?{colorVAL}:{color}]"
                />
            </div>
    
        </div>
		<button id="timerBoton" v-on:click="contador()" v-bind:style="[timer111 ? {cursor}:{cursorP}]">INICAR SUDOKU</button>
        <button id="listo" v-bind:style="[!show ? {cursorP}:{cursor}]" v-on:click="comprobar()">Comprobar</button> 
        <button id="resolver" v-on:click="mostrar()" v-bind:style="[!show ? {cursorP}:{cursor}]">Resolver</button>
        <div id="timer">{{timer}}</div>
      </div>

    `,
};
//esdeveniment v-on:click

const medio = {
	data: function () {
		return {
			sudoku: [
				{ valor: 5, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 9, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 4, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 7, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 8, disabled: true },
				{ valor: 3, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 9, disabled: true },
				{ valor: "", disabled: true },
				{ valor: "", disabled: false },
				{ valor: 6, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 1, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 7, disabled: true },
				{ valor: 3, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 6, disabled: true },
				{ valor: 2, disabled: true },
				{ valor: 5, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 3, disabled: true },
				{ valor: 8, disabled: true },
				{ valor: 5, disabled: true },
				{ valor: 7, disabled: true },
				{ valor: 2, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 6, disabled: true },
				{ valor: 4, disabled: true },
				{ valor: 9, disabled: true },
				{ valor: 1, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 7, disabled: true },
				{ valor: 4, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 8, disabled: true },
				{ valor: 2, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 2, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 1, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 4, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 3, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 4, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 8, disabled: true },
				{ valor: 7, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 7, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 5, disabled: true },
				{ valor: 3, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 6, disabled: true },
			],
			sudokuResuelto: [
				{ valor: 5, disabled: true },
				{ valor: 3, disabled: false },
				{ valor: 9, disabled: true },
				{ valor: 8, disabled: false },
				{ valor: 7, disabled: false },
				{ valor: 6, disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 1, disabled: false },
				{ valor: 2, disabled: false },
				{ valor: 7, disabled: true },
				{ valor: 2, disabled: false },
				{ valor: 8, disabled: true },
				{ valor: 3, disabled: true },
				{ valor: 1, disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 9, disabled: true },
				{ valor: 6, disabled: true },
				{ valor: 5, disabled: false },
				{ valor: 6, disabled: true },
				{ valor: 4, disabled: false },
				{ valor: 1, disabled: true },
				{ valor: 2, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 5, disabled: false },
				{ valor: 7, disabled: true },
				{ valor: 3, disabled: true },
				{ valor: 8, disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 6, disabled: true },
				{ valor: 2, disabled: true },
				{ valor: 5, disabled: true },
				{ valor: 3, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 8, disabled: false },
				{ valor: 7, disabled: false },
				{ valor: 1, disabled: false },
				{ valor: 3, disabled: true },
				{ valor: 8, disabled: true },
				{ valor: 5, disabled: true },
				{ valor: 7, disabled: true },
				{ valor: 2, disabled: true },
				{ valor: 1, disabled: false },
				{ valor: 6, disabled: true },
				{ valor: 4, disabled: true },
				{ valor: 9, disabled: true },
				{ valor: 1, disabled: true },
				{ valor: 9, disabled: false },
				{ valor: 7, disabled: true },
				{ valor: 4, disabled: true },
				{ valor: 6, disabled: false },
				{ valor: 8, disabled: true },
				{ valor: 2, disabled: true },
				{ valor: 5, disabled: false },
				{ valor: 3, disabled: false },
				{ valor: 2, disabled: true },
				{ valor: 5, disabled: false },
				{ valor: 6, disabled: false },
				{ valor: 1, disabled: true },
				{ valor: 8, disabled: false },
				{ valor: 7, disabled: false },
				{ valor: 3, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 9, disabled: false },
				{ valor: 1, disabled: false },
				{ valor: 3, disabled: true },
				{ valor: 6, disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 2, disabled: false },
				{ valor: 5, disabled: false },
				{ valor: 8, disabled: true },
				{ valor: 7, disabled: true },
				{ valor: 8, disabled: false },
				{ valor: 7, disabled: true },
				{ valor: 4, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 5, disabled: true },
				{ valor: 3, disabled: true },
				{ valor: 1, disabled: false },
				{ valor: 2, disabled: false },
				{ valor: 6, disabled: true },
			],
			color: "blue",
			colorVALOR: "solid black",
			show: false,
			cursor: "not-allowed",
			cursorP: "pointer",
			timer: 0,
			timer111: false,
		};
	},
	methods: {
		mostrar: function () {
			this.sudoku = this.sudokuResuelto;
			this.show = true;
		},
		select: function (event) {
			console.log(event);
			this.$refs["input"].forEach((element, index) => {
				let columna = Math.floor(event % 9);
				let fila = Math.floor(event / 9);
				let columnaGrande = Math.floor((event % 9) / 3);
				let filaGrande = Math.floor(event / 9 / 3);

				if (
					index === event || // Casilla a la que se clica
					index % 9 === columna || // Columna chica a la que se clica
					Math.floor(index / 9) === fila || // Fila chica a la que se clica
					(Math.floor((index % 9) / 3) === columnaGrande && Math.floor(index / 9 / 3) === filaGrande)
				) {
					element.classList.value = "selected";
				} else {
					element.classList.value = "";
				}
			});
			if (event.valor != undefined) {
				this.sudoku[event].valor = event.valor;
			}
			console.log(this.sudoku[event]);
		},
		contador() {
			this.timer111 = true;
			interval = setInterval(() => {
				this.timer++;
			}, 1000);
		},
		comprobar() {
			let errores = 0;
			clearInterval(interval);
			for (let i = 0; i < this.sudoku.length; i++) {
				if (this.sudoku[i].valor != this.sudokuResuelto[i].valor) {
					errores++;
				}
			}
			nombreJugador = prompt("Introduce tu nombre: ");
			let puntuacion = new Puntuacion(nombreJugador, errores, this.timer, "Medio");
			routing.anadirPuntuacion(puntuacion);
			console.log(puntuacion);
			//guardar con local storage puntuacion
		},
	},

	template: `
    <div>
        <div class="sudoku">
            <div class="casilla" v-on:click="select(index)" v-for="(numero,index) in sudoku" :key="index">
                <input type="number" ref="input" oninput="this.value = this.value.replace(/[^1-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" v-model="numero.valor" :disabled="numero.disabled" v-bind:style="[numero.disabled ?{colorVAL}:{color}]"
                />
            </div>
    
        </div>
		<button id="timerBoton" v-on:click="contador()" v-bind:style="[timer111 ? {cursor}:{cursorP}]">INICAR SUDOKU</button>
        <button id="listo" v-bind:style="[!show ? {cursorP}:{cursor}]" v-on:click="comprobar()">Comprobar</button> 
        <button id="resolver" v-on:click="mostrar()" v-bind:style="[!show ? {cursorP}:{cursor}]">Resolver</button>
        <div id="timer">{{timer}}</div>
      </div>

    `,
};
const dificil = {
	data: function () {
		return {
			sudoku: [
				{ valor: 8, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 3, disabled: true },
				{ valor: 6, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 7, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 9, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 2, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 5, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 7, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 5, disabled: true },
				{ valor: 7, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 1, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 3, disabled: true },
				{ valor: 4, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 1, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 6, disabled: true },
				{ valor: 8, disabled: true },
				{ valor: 4, disabled: true },
				{ valor: 3, disabled: true },
				{ valor: 8, disabled: true },
				{ valor: 5, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 1, disabled: true },
				{ valor: 7, disabled: true },
				{ valor: "", disabled: false },
				{ valor: 9, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
				{ valor: 4, disabled: true },
				{ valor: "", disabled: false },
				{ valor: "", disabled: false },
			],
			sudokuResuelto: [
				{ valor: 8, disabled: true },
				{ valor: 1, disabled: false },
				{ valor: 2, disabled: false },
				{ valor: 7, disabled: false },
				{ valor: 5, disabled: false },
				{ valor: 3, disabled: false },
				{ valor: 6, disabled: false },
				{ valor: 4, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 4, disabled: false },
				{ valor: 3, disabled: true },
				{ valor: 6, disabled: true },
				{ valor: 8, disabled: false },
				{ valor: 2, disabled: false },
				{ valor: 1, disabled: false },
				{ valor: 7, disabled: false },
				{ valor: 5, disabled: false },
				{ valor: 6, disabled: false },
				{ valor: 7, disabled: true },
				{ valor: 5, disabled: false },
				{ valor: 4, disabled: false },
				{ valor: 9, disabled: true },
				{ valor: 1, disabled: false },
				{ valor: 2, disabled: true },
				{ valor: 8, disabled: false },
				{ valor: 3, disabled: false },
				{ valor: 1, disabled: false },
				{ valor: 5, disabled: true },
				{ valor: 4, disabled: false },
				{ valor: 2, disabled: false },
				{ valor: 3, disabled: false },
				{ valor: 7, disabled: true },
				{ valor: 8, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 6, disabled: false },
				{ valor: 3, disabled: false },
				{ valor: 6, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 8, disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 5, disabled: true },
				{ valor: 7, disabled: true },
				{ valor: 2, disabled: false },
				{ valor: 1, disabled: false },
				{ valor: 2, disabled: false },
				{ valor: 8, disabled: false },
				{ valor: 7, disabled: false },
				{ valor: 1, disabled: true },
				{ valor: 6, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 5, disabled: false },
				{ valor: 3, disabled: true },
				{ valor: 4, disabled: true },
				{ valor: 5, disabled: false },
				{ valor: 2, disabled: false },
				{ valor: 1, disabled: true },
				{ valor: 9, disabled: false },
				{ valor: 7, disabled: false },
				{ valor: 4, disabled: false },
				{ valor: 3, disabled: false },
				{ valor: 6, disabled: true },
				{ valor: 8, disabled: true },
				{ valor: 4, disabled: true },
				{ valor: 3, disabled: true },
				{ valor: 8, disabled: true },
				{ valor: 5, disabled: true },
				{ valor: 2, disabled: false },
				{ valor: 6, disabled: false },
				{ valor: 9, disabled: false },
				{ valor: 1, disabled: true },
				{ valor: 7, disabled: true },
				{ valor: 7, disabled: false },
				{ valor: 9, disabled: true },
				{ valor: 6, disabled: false },
				{ valor: 3, disabled: false },
				{ valor: 1, disabled: false },
				{ valor: 8, disabled: false },
				{ valor: 4, disabled: true },
				{ valor: 5, disabled: false },
				{ valor: 2, disabled: false },
			],
			color: "blue",
			colorVALOR: "solid black",
			show: false,
			cursor: "not-allowed",
			cursorP: "pointer",
			timer: 0,
			timer111: false,
		};
	},
	methods: {
		mostrar: function () {
			this.sudoku = this.sudokuResuelto;
			this.show = true;
		},
		select: function (event) {
			console.log(event);
			this.$refs["input"].forEach((element, index) => {
				let columna = Math.floor(event % 9);
				let fila = Math.floor(event / 9);
				let columnaGrande = Math.floor((event % 9) / 3);
				let filaGrande = Math.floor(event / 9 / 3);

				if (
					index === event || // Casilla a la que se clica
					index % 9 === columna || // Columna chica a la que se clica
					Math.floor(index / 9) === fila || // Fila chica a la que se clica
					(Math.floor((index % 9) / 3) === columnaGrande && Math.floor(index / 9 / 3) === filaGrande)
				) {
					element.classList.value = "selected";
				} else {
					element.classList.value = "";
				}
			});
			if (event.valor != undefined) {
				this.sudoku[event].valor = event.valor;
			}
			console.log(this.sudoku[event]);
		},
		contador() {
			this.timer111 = true;
			interval = setInterval(() => {
				this.timer++;
			}, 1000);
		},
		comprobar() {
			let errores = 0;
			clearInterval(interval);
			for (let i = 0; i < this.sudoku.length; i++) {
				if (this.sudoku[i].valor != this.sudokuResuelto[i].valor) {
					errores++;
				}
			}
			nombreJugador = prompt("Introduce tu nombre: ");
			let puntuacion = new Puntuacion(nombreJugador, errores, this.timer, "Díficil");
			routing.anadirPuntuacion(puntuacion);
			console.log(puntuacion);
			//guardar con local storage puntuacion
		},
	},

	template: `
    <div>
        <div class="sudoku">
            <div class="casilla" v-on:click="select(index)" v-for="(numero,index) in sudoku" :key="index">
                <input type="number" ref="input" oninput="this.value = this.value.replace(/[^1-9.]/g, '').replace(/(\..*?)\..*/g, '$1');" v-model="numero.valor" :disabled="numero.disabled" v-bind:style="[numero.disabled ?{colorVAL}:{color}]"
                />
            </div>
    
        </div>
		<button id="timerBoton" v-on:click="contador()" v-bind:style="[timer111 ? {cursor}:{cursorP}]">INICAR SUDOKU</button>
        <button id="listo" v-bind:style="[!show ? {cursorP}:{cursor}]" v-on:click="comprobar()">Comprobar</button> 
        <button id="resolver" v-on:click="mostrar()" v-bind:style="[!show ? {cursorP}:{cursor}]">Resolver</button>
        <div id="timer">{{timer}}</div>
      </div>

    `,
};
const rutes = {
	"#/": principal,
	"#/facil": facil,
	"#/medio": medio,
	"#/dificil": dificil,
};

var routing = new Vue({
	el: "#routing",
	data: {
		rutaActual: window.location.hash,
		rutes: rutes,
		puntuaciones: [],
	},
	mounted() {
		let data = JSON.parse(localStorage.getItem("puntuaciones"));
		console.log(data);
		for (let i = 0; i < data.length; i++) {
			this.puntuaciones.push(data[i]);
		}
		console.table("Hola", this.puntuaciones);
	},
	methods: {
		navegar: function ($event) {
			this.rutaActual = $event.target.hash;
		},
		anadirPuntuacion: function (puntuacion) {
			console.log(puntuacion);
			this.puntuaciones.push(puntuacion);
			localStorage.setItem("puntuaciones", JSON.stringify(this.puntuaciones));
		},
	},
	computed: {
		vistaActual: function () {
			return this.rutes[this.rutaActual] || error;
		},
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
    `,
});

/* MEDIO

  let sudoku = [5,3,9,8,7,6,4,1,2,
                7,2,8,3,1,4,9,6,5,
                ];

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

//CLASE PUNTUACION

class Puntuacion {
	constructor(nombreJugador, errores, tiempo, dificultad) {
		this.nombreJugador = nombreJugador;
		this.errores = errores;
		this.tiempo = tiempo;
		this.dificultad = dificultad;
	}
}

//LOCALSTORAGE

//INDEDXEDDB
