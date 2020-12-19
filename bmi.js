class Maincomp extends React.Component {
	constructor(props) {
		super(props);
		this.state= {weights:props.list};
		this.handlekgs = this.handlekgs.bind(this);
		this.handlepounds = this.handlepounds.bind(this);
		this.handlefeet = this.handlefeet.bind(this);
		this.handleinch = this.handleinch.bind(this);
	}
	handlekgs(event) {
		const cal = event.target.value;
		console.log('kgs = ',cal);		
		const pounds = cal * 2.20462262185;
		this.state.weights.pounds = pounds;
		this.state.weights.kgs = cal;
		this.setState({weights:this.state.weights});
		console.log(this.state.weights);
	}
	handlepounds(event) {
		const temp = event.target.value;
		const change = temp * 0.45;
		this.state.weights.pounds = temp;
		this.state.weights.kgs = change;
		this.setState({weights:this.state.weights});
		
	}

	handlefeet(event) {
		const feet = event.target.value;
		const cms = feet * 30.48;
		const inchs = this.state.weights.inchs * 2.54;
		const total = cms + inchs;
		this.state.weights.feet = feet;
		this.state.weights.cms = total;
		this.setState({weights:this.state.weights});
		
	}

	handleinch(event) {
		const inchs = event.target.value;
		const cms = inchs * 2.54;	
		const feet = this.state.weights.feet * 30.48
		const total = feet + cms;
		this.state.weights.cms = total;
		this.state.weights.inchs = inchs;
		this.setState({weights:this.state.weights}); 
	}

	render () {
		return (
			<form>
			<h3> <i> Weight Converter </i> </h3>
			<label> Enter the Weight in Kgs </label>
			<input type="text" value={this.state.weights.kgs} onChange={this.handlekgs}  />
			<br/> <br/>
			<label> Enter Weight In Pounds  </label>
			<input type="text" value={this.state.weights.pounds} onChange={this.handlepounds} />
			<br/> <br/>
			<h3> <i> Height Converter </i> </h3>
			<label> Enter the Height in feet </label>
			<input type="text" value={this.state.weights.feet} onChange={this.handlefeet} />
			<label> Enter the Height in Inchs </label>
			<input type="text" value={this.state.weights.inchs} onChange={this.handleinch} />
			<br/> <br/>
			<label> Enter the Height in cms </label>
			<input type="text" value={this.state.weights.cms}  />
			</form>
			);
	}
}

const list = {kgs:"", pounds:"",feet:"",inchs:"",cms:""}

ReactDOM.render(
 <Maincomp  list={list} />,
 document.getElementById('imp')
 );