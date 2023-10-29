/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IPageProps{
  title: string;
}
class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<IPageProps>{
  pageInfo():void {
    console.log(this.props.title);
  }
}

export { };


// class Component {
//   constructor (public props:T) {

//   }
// }

// class Page extends Component {
//   pageInfo () {
//     console.log(this.props.title);
//   }
// }
// export { };