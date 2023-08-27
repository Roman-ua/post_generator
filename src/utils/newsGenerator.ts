import bgSecondGradient from '../assets/images/bsSecondGradient.png'
import logoImg from '../assets/images/logo.png'

const percentCalculator = (num: number, pers: number) => {
  return Math.round((num * pers) / 100)
}

const newsGenerator = (
  newsTitle: string,
  setImageState: (arg: string) => void
) => {
  const canvas = document.createElement('canvas')
  const bgCanvas = document.createElement('canvas')
  const canvasDecorOne = document.createElement('canvas')

  const ctx = canvas.getContext('2d')
  const bgCtx = bgCanvas.getContext('2d')
  const decorOneCtx = canvasDecorOne.getContext('2d')

  const bgImg = new Image()
  bgImg.src = bgSecondGradient
  const logoIcon = new Image()
  logoIcon.src = logoImg

  canvas.width = 1280
  canvas.height = 606
  bgImg.onload = () => {
    if (bgCtx) {
      bgCtx.fillStyle = 'white'
      bgCtx.fillRect(0, 0, canvas.width, canvas.height)
    }
    if (decorOneCtx) {
      decorOneCtx.fillStyle = '#B0DAFF'
      decorOneCtx.fillRect(0, 0, 600, 300)
    }
    if (ctx) {
      ctx.drawImage(bgCanvas, 0, 0, canvas.width, canvas.height)
      ctx.drawImage(canvasDecorOne, 0, 135, canvas.width, 190)

      //main title
      ctx.font = 'bold 80px Arial'
      ctx.fillStyle = '#314d64'
      ctx.fillText('СВІЖЕНЬКА НОВИНА', 30, 100)

      // news title
      ctx.font = 'bold 60px Arial'
      ctx.fillStyle = 'white'
      ctx.fillText(newsTitle, 30, 248)
      // news title

      logoIcon.onload = () => {
        ctx.drawImage(
          logoIcon,
          -60,
          270,
          logoIcon.width - percentCalculator(logoIcon.width, 90),
          logoIcon.height - percentCalculator(logoIcon.height, 90)
        )
        setImageState(canvas.toDataURL('image/jpeg'))
      }
    }
  }
}

export default newsGenerator
