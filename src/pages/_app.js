import 'setimmediate'; // put on top of file
import Theme from '../styles/theme';

if (!global.setImmediate) {
  global.setImmediate = setTimeout
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 