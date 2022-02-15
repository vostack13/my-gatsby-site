import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  const [isComplete, setIsComplete] = React.useState(false);
  const onSubmit = React.useCallback((event) => {
    event.preventDefault();

    setIsComplete(true);
  }, [])


  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>

      {isComplete
        ? <div>{'Complete!!!'}</div>
        : <form onSubmit={onSubmit}>
            <input name="name" />
          </form>
      }
    </Layout>
  )
}
export default AboutPage