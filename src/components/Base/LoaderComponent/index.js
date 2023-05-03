import dynamic from 'next/dynamic'
import BoxComponent from '../BoxComponent'
import LottieGraanaLoader from './LottieGraanaLoader'
import { styles } from './styles'

const Lottie = dynamic(() => import('lottie-react'), {
  loading: () => null,
  ssr: false,
}) // ES6

export default function Loader(props) {
  return props.loading ? (
    <BoxComponent
      key={1}
      sx={
        props.transparent
          ? {
              ...styles.loaderOverlayTransparent,
              position: props.position || 'absolute',
              top: props.refinedSearchStyle ? '68%' : '0%',
              height: props.refinedSearchStyle ? '50px' : '100%',
            }
          : {
              ...styles.loaderOverlay,
              position: props.position || 'absolute',
              top: props.refinedSearchStyle ? '68%' : '0%',
              height: props.refinedSearchStyle ? '50px' : '100%',
            }
      }
    >
      <BoxComponent sx={styles.logoCenter}>
        <BoxComponent sx={styles.logoWrapper}>
          <Lottie animationData={LottieGraanaLoader} />
        </BoxComponent>
      </BoxComponent>
    </BoxComponent>
  ) : null
}
