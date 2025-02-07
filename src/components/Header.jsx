import LogoImg from '../assets/quiz-logo.png'

export default function Header(){
  return (
    <header>
    <img src={LogoImg} />
    <h1>ReactQuiz</h1>
    </header>)
}