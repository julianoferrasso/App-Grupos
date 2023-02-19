import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { groupsCreate } from '@storage/group/groupCreate'

import { AppError } from '@utils/AppError'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'

import { Container, Content, IconUsersThree } from './styles'
import { Alert } from 'react-native'

export function NewGroup() {
  const [groupName, setGroupName] = useState('')
  const navigation = useNavigation()

  async function handleCreateNewGroup() {
    // gravar novo grupo no storage
    try {
      // trim() remove espaços antes e depois
      if (groupName.trim().length === 0) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma')
      }

      await groupsCreate(groupName)
      // navegar ate players
      navigation.navigate('players', { group: groupName })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não possível criar um novo grupo')
        console.log(error)
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <IconUsersThree />
        <Highlight title="Nova turma" subtitle="Crie uma nova turma" />

        <Input
          placeholder="Nome da turma"
          value={groupName}
          onChangeText={setGroupName}
        />

        <Button
          title="Criar turma"
          style={{ marginTop: 10 }}
          onPress={handleCreateNewGroup}
        />
      </Content>
    </Container>
  )
}
