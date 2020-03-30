import { Container, Service } from 'typedi'

// @Service(QuestionService.name)
@Service('QuestionService')
export class QuestionService {
  // async getAllUsers(): Promise<Question[]> {
  async getAllQuestions(n: Number) {
    // await new Promise((resolve) => setTimeout(resolve, 500))
    return [
      {
        title: 'What is DI?',
      },
      {
        title: 'Why is it useful?',
      },
    ]
  }
}

// Container.set('QuestionService', new QuestionService())
