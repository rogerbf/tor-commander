import combineOutput from './combineOutput'

test(`combineOutput`, () => {
  expect(typeof (combineOutput)).toEqual(`function`)
})

test(`expected output`, () => {
  expect(combineOutput(
    [{ status: 250, message: `OK`, data: {} }]
  )).toEqual({ success: true, data: {} })

  expect(combineOutput([
    { status: 250, message: `ControlPort=9055`, data: { ControlPort: 9055 } },
    { status: 250, message: `ControlPort=9056`, data: { ControlPort: 9056 } }
  ])).toEqual({ success: true, data: { ControlPort: [ 9055, 9056 ] } })

  expect(combineOutput([
    { status: 650, message: `ControlPort=9055`, data: { ControlPort: 9055 } },
    { status: 250, message: `ControlPort=9056`, data: { ControlPort: 9056 } }
  ])).toEqual({ success: false, data: { ControlPort: [ 9055, 9056 ] } })

  expect(combineOutput([
    {
      status: 250,
      message: `ServiceID=foo3hw273rt5xmgh`,
      data: { ServiceID: `foo3hw273rt5xmgh` }
    },
    {
      status: 250,
      message: `PrivateKey=RSA1024:MIICXAIBAAKBgQCzKgt9WeDnUpNY8jURlOWtUt7oLtIKBHxJ6iaGiPRVs67+P+4axA3GwQclGtSyEKB53hBqDSD646lZxh2fJAQ6s3AZRdOMV0dIqlEu9wG41q/KLM24KL/Ifo9gOxbHMSUoYCNbW7HTo4T8CD5Wg9TkHHujQElx7/P1MWZFp/djWQIDAQABAoGAXLxMiit1cAab4hQsR9dsMpSMcF2btjewJYofOs+0uI9y6oMouY31G4VaL2h941Ub2ziIAnydL3+bbq5PMsovrVvHmR+ret7IloOPcEZDCKYJd2t8T+1sGFs/WIcYUDMV3g9mK5r2SrmGHw7j/IxqLQny/altZ8yENw0rOB1ql6ECQQDtUIvRuHjp1CGuaMtp20hFaw5MaOz+vaetQQ/lmUwqLu3wTEQX4G0+iaCKS2EeGVf6tu3xQaIotiyGpHFGFc3tAkEAwUVikEAgULsnQSwGHC5PxsJBT3+mN6M1CF57B61VBsPeLRhgp+NoqO0a0vKOJ7km0t/stq8sc+FPPq+eAs1dnQJBANzELH4Z9WnZbMfaNzkvxGjHsdKFXcuRVTZIq2g1FvS7GaCM4l+v6RDfaVidzSf5/a1/lZT1MMxcxMkwmyvOxvUCQFWekFiJIAfDsVMs1pQbbBoIKni2ewNA2RiZCnXPMtCpar6dgww9MTtMtspmy9ULMAjRTINtvQqk8L87e4uQQP0CQFeEJb2f1qh+hNuThp6/FT/itXxaWDXYP2VtZPR7qCQcH5J4x2NUjBzUta+EjbdyXE2K52FrT44rnMvU8TVr4Xs=`,
      data: { PrivateKey: `RSA1024:MIICXAIBAAKBgQCzKgt9WeDnUpNY8jURlOWtUt7oLtIKBHxJ6iaGiPRVs67+P+4axA3GwQclGtSyEKB53hBqDSD646lZxh2fJAQ6s3AZRdOMV0dIqlEu9wG41q/KLM24KL/Ifo9gOxbHMSUoYCNbW7HTo4T8CD5Wg9TkHHujQElx7/P1MWZFp/djWQIDAQABAoGAXLxMiit1cAab4hQsR9dsMpSMcF2btjewJYofOs+0uI9y6oMouY31G4VaL2h941Ub2ziIAnydL3+bbq5PMsovrVvHmR+ret7IloOPcEZDCKYJd2t8T+1sGFs/WIcYUDMV3g9mK5r2SrmGHw7j/IxqLQny/altZ8yENw0rOB1ql6ECQQDtUIvRuHjp1CGuaMtp20hFaw5MaOz+vaetQQ/lmUwqLu3wTEQX4G0+iaCKS2EeGVf6tu3xQaIotiyGpHFGFc3tAkEAwUVikEAgULsnQSwGHC5PxsJBT3+mN6M1CF57B61VBsPeLRhgp+NoqO0a0vKOJ7km0t/stq8sc+FPPq+eAs1dnQJBANzELH4Z9WnZbMfaNzkvxGjHsdKFXcuRVTZIq2g1FvS7GaCM4l+v6RDfaVidzSf5/a1/lZT1MMxcxMkwmyvOxvUCQFWekFiJIAfDsVMs1pQbbBoIKni2ewNA2RiZCnXPMtCpar6dgww9MTtMtspmy9ULMAjRTINtvQqk8L87e4uQQP0CQFeEJb2f1qh+hNuThp6/FT/itXxaWDXYP2VtZPR7qCQcH5J4x2NUjBzUta+EjbdyXE2K52FrT44rnMvU8TVr4Xs=` }
    },
    {
      status: 250,
      message: `OK`,
      data: {}
    }
  ])).toEqual({
    success: true,
    data: {
      ServiceID: `foo3hw273rt5xmgh`,
      PrivateKey: `RSA1024:MIICXAIBAAKBgQCzKgt9WeDnUpNY8jURlOWtUt7oLtIKBHxJ6iaGiPRVs67+P+4axA3GwQclGtSyEKB53hBqDSD646lZxh2fJAQ6s3AZRdOMV0dIqlEu9wG41q/KLM24KL/Ifo9gOxbHMSUoYCNbW7HTo4T8CD5Wg9TkHHujQElx7/P1MWZFp/djWQIDAQABAoGAXLxMiit1cAab4hQsR9dsMpSMcF2btjewJYofOs+0uI9y6oMouY31G4VaL2h941Ub2ziIAnydL3+bbq5PMsovrVvHmR+ret7IloOPcEZDCKYJd2t8T+1sGFs/WIcYUDMV3g9mK5r2SrmGHw7j/IxqLQny/altZ8yENw0rOB1ql6ECQQDtUIvRuHjp1CGuaMtp20hFaw5MaOz+vaetQQ/lmUwqLu3wTEQX4G0+iaCKS2EeGVf6tu3xQaIotiyGpHFGFc3tAkEAwUVikEAgULsnQSwGHC5PxsJBT3+mN6M1CF57B61VBsPeLRhgp+NoqO0a0vKOJ7km0t/stq8sc+FPPq+eAs1dnQJBANzELH4Z9WnZbMfaNzkvxGjHsdKFXcuRVTZIq2g1FvS7GaCM4l+v6RDfaVidzSf5/a1/lZT1MMxcxMkwmyvOxvUCQFWekFiJIAfDsVMs1pQbbBoIKni2ewNA2RiZCnXPMtCpar6dgww9MTtMtspmy9ULMAjRTINtvQqk8L87e4uQQP0CQFeEJb2f1qh+hNuThp6/FT/itXxaWDXYP2VtZPR7qCQcH5J4x2NUjBzUta+EjbdyXE2K52FrT44rnMvU8TVr4Xs=`
    }
  })
})
