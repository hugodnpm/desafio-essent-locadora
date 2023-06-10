import axios from 'axios'

export const UseFetchPut = async (
  url: string,
  data: any,
  setAlertSucess: any,
  setAlertError: any
) => {
  let baseUrl = process.env.NEXT_PUBLIC_API_URL
  try {
    const response = await axios.put(baseUrl + url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      setAlertSucess('Usuário alterado com sucesso!')
      return response
    } else {
      // Exibir alerta de erro
      const errorResponse = response.data
      setAlertError(errorResponse.error)
    }
  } catch (error) {
    // Exibir alerta de erro de rede
    setAlertError(
      'Erro de rede. Por favor, verifique sua conexão e tente novamente.'
    )
  }
}
