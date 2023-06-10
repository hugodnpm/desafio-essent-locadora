export const UseFetchGet = async (
  url: string,
  setData: any,
  setAlertSucess: any,
  setAlertError: any
) => {
  let baseUrl = process.env.NEXT_PUBLIC_API_URL
  try {
    const response = await fetch(baseUrl + url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      const data = await response.json()

      setData(data)

      setAlertSucess('Ação Concluída com sucesso com sucesso!')
    } else {
      // Exibir alerta de erro
      const errorResponse = await response.json()
      setAlertError(errorResponse.error)
    }
    return response
  } catch (error) {
    setAlertError(
      'Erro de rede. Por favor, verifique sua conexão e tente novamente.'
    )
  }
}
