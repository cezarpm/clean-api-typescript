import { AddAccountModel } from '../../domain/usecases/add-account'
import { AccountModel } from '../../domain/models/account'

export interface addAccountRepository {
  add(account: AddAccountModel): Promise<AccountModel>
}
