import { Container } from 'typedi'
import { QuestionService } from './question.service'
import { UserService } from './user.service'

const FakeLogger = {
  log: () => {},
}

beforeAll(() => {
  Container.set('QuestionService', new QuestionService())
  Container.set('Logger', FakeLogger)
})

describe('user.service', () => {
  describe('getAllUsers', () => {
    it('should get all users', async () => {
      const service = new UserService()

      const users = await service.getAllUsers()
      expect(users.length).toBe(2)
    })
  })
})
