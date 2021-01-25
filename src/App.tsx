import React, {PureComponent,Suspense} from 'react';
import './App.css';
const Case = React.lazy(() => import('./components/case'))

interface IProps {}
interface IState {
  num : Number
}
class App extends PureComponent<IProps,IState> {
  constructor(props:IProps){
    super(props)
    this.state  = {
      num : 1
    }
    this.handle = this.handle.bind(this)
  }
  handle(){
    this.setState((state) => {
      let count:any = state.num
      console.log(count)
      return {
        num : 20
      }
    })
  }
  // handle = (): void => {
  //   console.log(this)
  // }
  
  render() {
    console.log('app组件渲染')
    return (
      
      <div>
        <h2 onClick={this.handle}>{this.state.num}</h2>
        <Suspense fallback={<div>loading...</div>}>
          <Case/>
        </Suspense>
      </div>
    )
  }

}

export default App;
