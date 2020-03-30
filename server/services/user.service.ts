import { Container, Service } from 'typedi'
import { QuestionService } from './question.service'
import { LoggerInterface } from '../lib/Logger'

@Service('UserService')
export class UserService {
  // async getAllUsers(): Promise<User[]> {
  async getAllUsers() {
    // await new Promise((resolve) => setTimeout(resolve, 500))

    // Two ways of getting types right
    const questionService: QuestionService = Container.get('QuestionService')
    // const questionService = Container.get<QuestionService>('QuestionService')

    // Types safety without neccessity to import QuestionService from './question.service'
    const questions = await questionService.getAllQuestions(12)
    const users = [
      {
        name: 'Pavel Svitek',
        questions,
      },
      {
        name: 'Thomas Fantomas',
        questions: [],
      },
    ]

    const logger: LoggerInterface = Container.get('Logger')
    logger.log(`getAllUsers(): ${users}`)

    return users
  }
}

// Container.set('UserService', new UserService())
