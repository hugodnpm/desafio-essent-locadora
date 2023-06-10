import axios from 'axios'

export const UseFetchPost = async (
  url: string,
  data: any,
  setAlertSucess: any,
  setAlertError: any
) => {
  let baseUrl = process.env.NEXT_PUBLIC_API_URL
  try {
    const response = await axios.post(baseUrl + url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.status === 200) {
      setAlertSucess('Ação Efetuada com sucesso!')
      return response
    } else {
      // Exibir alerta de erro
      setAlertError(response.data.error)
    }
  } catch (error) {
    // Exibir alerta de erro de rede
    setAlertError(
      'Erro de rede. Por favor, verifique sua conexão e tente novamente.'
    )
  }
}

/*export const UseFetchPost = async (
  url: string,
  data: any,
  setAlertSucess: any,
  setAlertError: any
) => {
  let baseUrl = process.env.NEXT_PUBLIC_API_URL
  try {
    const response = await fetch(baseUrl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      setAlertSucess('Ação Efetuada com sucesso!')
      return response
    } else {
      // Exibir alerta de erro
      const errorResponse = await response.json()

      setAlertError(errorResponse.error)
    }
  } catch (error) {
    // Exibir alerta de erro de rede

    setAlertError(
      'Erro de rede. Por favor, verifique sua conexão e tente novamente.'
    )
  }
}
*/
