const A = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAN/SURBVGiB7ZnPTxtHFMe/b3asiiT8aKipQKDi1Cb4zKXigHLiFlKVc/+IKof0mhs9IP4IzkUNx55KDigXznaBxlS2jBqXFm9oaMXufHuIUSrk3Z3ZXSeq5M/RO2/f97szO2/2GRgyZMiQD4nkfcP9/eZIsahLRsm0Cc04AChPdZXhaacTNJaX5y7zzJeLgZcv//wsMP+sGeBLAEsAxiOGdgEcKOAHrT7avXfv41+z5s5k4PCwXaXynhBcB3DHMfxCIN+LCb9bWJippdWQykC9Xh+lN/5YRL4BMJY2eQ+f5JaE3c3FxcXXrsHOBo6OWrOh6G0AD1xjE/jJY/B1pTLbcglyMnB8/Koc0PwIQclNmyVEQ4taLZenjm1DrA0cHbVmQ+jnAxN/DdHwEKzYzoSyGVSvd0ZD0dsDFw8AglIoerte74zaDLcyQC94jPzXfBwPejkTSVxCh4ftqlHqBbLvNq74ypgvkrbYxBmg9p4gpfiJsRHcnbidJhQAxnq5Y4k1UKudztNwPa2CqU9GUZx0rW/voOF6rXY6Hzcm1oAUZA3uFfZdvGQ+qdzpaYgkaQk9yqogB2I1RBrYbzZH8PZg9qFZ6mnpS6SB4t+3Sog+Vb5Pxnta+hJpgCqYGYwed+K06KgLITBm8wrenbiduNPc//zTvr93zi7wx/lfiTnCmG3cqhLHYYwBSec4kjDGZE0fPQMe4Nvc/ty/xLnf/yvx+sn//MtvqcT9V0vUtcgZEK3bmbLmSJyWSAMd9aYBSHcwklyQ7lst/Yk0sDw3dwnhwWBEOSA8WJ6L7mTEv8TEs9wFuZKgIdYAr7gL4CJ17hS70w0uehoiiTVQrU6fENxJm/3V76/ROUvtHwR3qtXpk7gxiXXA09xAzDYWx7l/aVWoIvA9w42kQYkGFuZnaiS30qpIC8ktm4aXVSWWUG+S3Msuyw6SexLqTZuxDm2Vs9lQXT0HB9yZEDQ8U1ipVCbza6sAQKUy2dJUqxBEFpXMCBqaatVWPOB4mCuXp449U1ghkftyIrnnmcKKS1cOSHEarVQmWxJ6Dyl8ipS70w18kk8l1A9dnvw12drrJ+1qGMi3AvkKKdrrBHc8w4333l6/Sa12Oi8FWYPgEShLACM+RaUL8ADAM15xN6lI2ZD/X0zN5kjR3CoxCGauv6Q8wBet2x31phF3MBsyZMiQ/x//ArVLRQ7BSnshAAAAAElFTkSuQmCC", B = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAD9SURBVDiNzdKxSsNQFAbg/7/kYrlmdTPB1XfokA6ddHRIwRfwndwcKi4OUgo6pI/hJiQ6FDpaO/SS30WlJVGSkMF/vPfcj8M5F/hvYdPCo+QuPLDhg0G5yreHEyxGfvfeNEUGNpwblW8QGdv1FEkWtIK+EUDDErrOvUshMrKbm+ZQkgUDG84pLUFNSHN/HLwPQQnS3lh+h5IsiO16SmmZe5cWj+e3oK5Ik0Fk4d3lbnn9sL8QiMy9S7EY+dqzP6EOSBXqiFRmFNtNJwQA9v6CoIvCO9sWqXQEAF2QOmgVjWeK7Me2DdJrfrYWjWcvAE7aPBbw/Pp0dtp3U/3kE8bqntRwxaaxAAAAAElFTkSuQmCC", S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKvSURBVEiJvZbPS1RRFMc/595xmBJmxh+UITVBkCQRVJYUBdEw0SKwVW1aRRDUHyAEtXAXLaOFEESb1goRkkybolAkoYUyhpBBOhWOOmHJOPeeFi9lyvcm+vldvXfPu99zzvedc88V6mAm293pre8xQhalQ6ANQKGIUPBK3jgzmMmPTERxSNjiu9NdHVUnfSqcFYjXC0KhIspAzOqN9qGxwk8dvMkdviSiN4HmesQhKKlK787h0bu1i6b25W2u65qI7/8NcoBmEd//Ntd1rXZxPYMgct8PYjbu/RWoVzWX1zIR+Ka5l+f8XuRhKMWMHm0fGivEAKpO+pBo8viu3Wy9fR+xNojROYpXLrD6ZjpqS3PVSR9wXmay3Z1q/fiP1bKp+xgmmQIgceAwtnULy48fAtB46gzu4wdWxkcB8OUlvow8+86DQkWc2R/z1veYkFJMdB1h8/GTrE5P4UrzuOIciX0HAXDFucDRiVM07NrN56dPNjgQiHvre2LfmmgDFu7cwiQ2sfLqJcvDD0N1aMydIVGaZ+HOrVC7EbIGpSPUCrjyIiYVyJS+eJWG7RkatmdIX7wKgG1uwZUXo7aD0mHW2j8MvryEbWoBIL5nL6apBdPUQnzP3iDCZAq3UIrkF2irW/OuNI9NpiPtNpnGL9XJADAKxShj9f0stm1btIO2bVTfz0baFYoGYcMBtYZAotZoB02t+DoSIRRiXskbyIbZA4mCn1x+cI/V6dfrzwA2lcLVkcgreWOcGVSohGewiEmlwVpWxkfxy5/wy5+CBrMWk0zjI6pIoWKcGYxl8iMTM7lDAwjnwj6sTE2y49GLUJLK1GRk9KIMZPIjE//8sDMA7UNjBVXpBfV/zq1eVXrXptt6H+wcHr0ryvU/c6JelOu1U+2fj8z/P/Rr8TeuLV8Bez00LWTOZNMAAAAASUVORK5CYII=";

export {
    B as _,
    S as a,
    A as b
};