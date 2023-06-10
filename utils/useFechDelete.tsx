import axios from 'axios'

export const UseFetchDelete = async (
  url: string,
  setData: any,
  setAlertSucess: any,
  setAlertError: any
) => {
  let baseUrl = process.env.NEXT_PUBLIC_API_URL
  try {
    const response = await axios.delete(baseUrl + url, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      const data = response.data
      setData(data)
      setAlertSucess('Usuário deletado com sucesso!')
    } else {
      // Exibir alerta de erro
      const errorResponse = response.data
      setAlertError(errorResponse.error)
    }

    return response
  } catch (error) {
    setAlertError(
      'Erro de rede. Por favor, verifique sua conexão e tente novamente.'
    )
  }
}
