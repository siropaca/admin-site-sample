import Header from '../components/header';

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
