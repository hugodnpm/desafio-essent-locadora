export const UseFetchPut = async (
  url: string,
  data: any,
  setAlertSucess: any,
  setAlertError: any
) => {
  let baseUrl = process.env.NEXT_PUBLIC_API_URL
  try {
    const response = await fetch(baseUrl + url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (response.ok) {
      setAlertSucess('Usuário alterado com sucesso!')
      return response
    } else {
      // Exibir alerta de erro
      const errorResponse = await response.json()

      setAlertError(errorResponse.error)
    }
  } catch (error) {
    // Exibir alerta de erro de rede
    console.log('error', error)
    setAlertError(
      'Erro de rede. Por favor, verifique sua conexão e tente novamente.'
    )
  }
}