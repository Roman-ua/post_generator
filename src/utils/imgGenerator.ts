import bgSecondGradient from '../assets/images/bsSecondGradient.png'
import companyImg from '../assets/images/fi-rr-building.svg'
import positionImg from '../assets/images/fi-rr-user.svg'
import salaryImg from '../assets/images/fi-rr-usd-square.svg'
import locationImg from '../assets/images/free-icon-font-marker.png'
import readMoreImg from '../assets/images/free-icon-font-angle-small-down.png'
import logoImg from '../assets/images/logo.png'

const percentCalculator = (num: number, pers: number) => {
  return Math.round((num * pers) / 100)
}

const imgGenerator = (
  company: string,
  position: string,
  salary: string,
  location: string,
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
  const companyIcon = new Image()
  companyIcon.src = companyImg
  const positionIcon = new Image()
  positionIcon.src = positionImg
  const salaryIcon = new Image()
  salaryIcon.src = salaryImg
  const locationIcon = new Image()
  locationIcon.src = locationImg
  const readMoreIcon = new Image()
  readMoreIcon.src = readMoreImg
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
      ctx.fillText('СВІЖЕНЬКА ВАКАНСІЯ', 30, 100)

      // company
      ctx.font = 'normal 60px Arial'
      ctx.fillStyle = 'white'
      ctx.fillText('Компанія - ', 100, 212)

      ctx.font = 'bold 60px Arial'
      ctx.fillStyle = '#314d64'
      ctx.fillText(company, 425, 212)
      // company

      //position
      ctx.font = 'normal 60px Arial'
      ctx.fillStyle = 'white'
      ctx.fillText('Посада - ', 100, 290)

      ctx.font = 'bold 60px Arial'
      ctx.fillStyle = '#314d64'
      ctx.fillText(position, 360, 290)
      //position

      // //Logo
      // ctx.font = 'bold 100px Arial'
      // ctx.fillStyle = '#314d64'
      // ctx.fillText('LOGO', 55, 510)
      // //Logo

      //Salary
      ctx.font = 'normal 40px Arial'
      ctx.fillStyle = '#314d64'
      ctx.fillText('Зарплатня -', 720, 409)

      ctx.font = 'bold 40px Arial'
      ctx.fillStyle = '#FFB319'
      ctx.fillText(salary, 950, 409)
      //Salary

      //location
      ctx.font = 'normal 40px Arial'
      ctx.fillStyle = '#314d64'
      ctx.fillText('Локація -', 720, 459)

      ctx.font = 'bold 40px Arial'
      ctx.fillStyle = '#314d64'
      ctx.fillText(location, 900, 459)
      //location

      //read more
      ctx.font = 'normal 20px Arial'
      ctx.fillStyle = '#314d64'
      ctx.fillText('Детальна інформація', 675, canvas.height - 25)
      //read more

      companyIcon.onload = () => {
        ctx.drawImage(
          companyIcon,
          45,
          173,
          companyIcon.width - percentCalculator(companyIcon.width, 92),
          companyIcon.height - percentCalculator(companyIcon.height, 92)
        )
        positionIcon.onload = () => {
          ctx.drawImage(
            positionIcon,
            45,
            250,
            positionIcon.width - percentCalculator(positionIcon.width, 92),
            positionIcon.height - percentCalculator(positionIcon.height, 92)
          )
          ctx.drawImage(
            salaryIcon,
            675,
            376,
            salaryIcon.width - percentCalculator(salaryIcon.width, 93),
            salaryIcon.height - percentCalculator(salaryIcon.height, 93)
          )
          ctx.drawImage(
            locationIcon,
            675,
            425,
            locationIcon.width - percentCalculator(locationIcon.width, 93),
            locationIcon.height - percentCalculator(locationIcon.height, 93)
          )
          ctx.drawImage(
            readMoreIcon,
            765,
            canvas.height - 25,
            readMoreIcon.width - percentCalculator(readMoreIcon.width, 95),
            readMoreIcon.height - percentCalculator(readMoreIcon.height, 95)
          )
          ctx.drawImage(
            readMoreIcon,
            765,
            canvas.height - 20,
            readMoreIcon.width - percentCalculator(readMoreIcon.width, 95),
            readMoreIcon.height - percentCalculator(readMoreIcon.height, 95)
          )
        }
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
}

export default imgGenerator
