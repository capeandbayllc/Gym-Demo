<template>
  <div class="py-5 h-screen w-screen" :class="{ 'bg-black': transitionScreen == 3 }">


    <div id="logo" class="logo" :class="{
      'logo-screen2': transitionScreen == 2,
      'logo-screen3': transitionScreen == 3,
    }">
      <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none" xmlns:xlink="http://www.w3.org/1999/xlink"
        width="full" height="48" viewBox="0 0 482 48">
        <defs>
          <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 961 94">
            <image width="961" height="94"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA8EAAABeCAYAAAADkBYLAAAACXBIWXMAAC4jAAAuIwF4pT92AAAgAElEQVR4nO2dTXbbOLaAP9XJ3H4rsLICuyeamr0Cu1dgZgVxTTQNM9UkygqCrKCUFZQy1aTtFRS9A2kFegOQseO2AJIg8UPe7xydVAqCcCMRwP3Dxex4PBIpGXAFzKs/Aa4b9n0E9sBD9ef2xX8LgiAIPTBb7ubo9fnK8tYxswe2x9XiIbQgQnzMlrtznvWZqbIHHo6rxTa0IIIwFar9OUPbUVOlRK89b+7Ps4iM4Fv0j5UBlwON8YQ2iOtXOdA4Nu6BLw79vwN5P6J4IQP+duj/RP+TuOmDf6jGFgcKFMCnhu/9XL3fN1uaO8t8UjvmaudcSdg1yInZcncFrInzuw7FE1AcVwvlYaw9cGZof0+iz1YPZJj3mwNwPrQQlQJaAHdDj5UQB2B9XC0Kz+MWvL13PTJe50SGeR7MPMnxmoLTesRPtNxjI8PjbzFb7jL09yz78zNPwP1xtdi8/J9/BBKm5hbYoDf0v4CPDGcAA1ygN6RvwD9oZfQe/14Shd4MunKHh028R4rA/V04Qz8jU+cc+R5cuERvSDdoBaBeg0r0enAbSrC2zJa7HPgvssG+5gL4NlvulIexbGNMea7mlnY1tACVk+gBMYBfcwZ8mi13D1WEPDSXhNUvBKFXqv35b2R/fs0F8Nfr/TmEETxHRxBqw/cGs0d7SC7REdnaIM7xY1zu0ca/C6koOXPcJuMTHpQWC6l810OSE26ejpnaMfcX2iAuiNjBVXmYv4WWI3LuPBjCa0t7PvD4sXKO3fC0fXdOVAbwFlkvTVzirgP1xSfGGX0UJkZlAMv+bOZuttwV9V98GsEZemP4Bx3xjW2DuEQ/PCV6k5wPPF7h2D8Vw6wI3L8PzpiuUlmTyvOWMhdohawkQmO4ityo0HIkwt1suRsyul+iUwdPMdU1K7e0/2T4NHFFfPpNjFzPlrtY9hVFZOutILShOn4xqINvRHyqnJVejOAMbfymEp4/Qxvp/6AXxvlA45Tos71dSUHJmeOWDhZDFLimCC1AQHK0gSb44QxtDD8QV5r0LfIctKEY+POVpT0fePwYsRlVasjBK8fHkEe6xkYsRvAFYkAIaXOPON/acA/DGsFz9IaTivH7FncMu2kWgfsPTRG4f59cME2lEuL6HabEBTpNOhblLCaDPAUuBz73qDDXlrhmWlVBM8xOmgPDO1WzgT9/bFzUEZkIuEPWOCFdstACJMYtwLuBPvwerTiLV8JMCfxAn4vuwgXPxcVi4xy3DSWmKHBNQXwyDU3OeKJ/T/irmHtOfxGhjzxXzg9ZpTwWZTUl6vOhQ6HQz8cp7okn2jY0uaVdeZBB5kh76iJiMaDQ8pRhxRCE1kgGSjvOZsvdvG8jeI5eRFKN/IZgTXcjGLSCE6MR7JqaUfQkR5/E7HQYiiK0AD2iCPfvmVevDK1ktZ3zl2hjKiOcITwWZ8iYWGM2gnOmYQQHL4gldGYeWoAXnKH3iSysGIIgeGDeZzp0jvbmiQHcji3mAic2ronP++x6nU6MUeCaKSiUNRli+PRFiZ7rBdqRMgP+g84EaUptCIcq4PIYaFzhNCVSIAviKIgldCOWKHDNNeNy/gqC8DYPfRnBCl1ZWdKfu1E49o/NMLtlfFHgmmum4yUuQgswcjboufKe5kXyQl4tEpuyGj3H1WLrYRhlac89yBCaoAWxXrD1NM6YiHFd+UR8wQVBMOESTJsiT8fVYu9qBJ+jF325EN6NLTr62ZU74kopKhz6xhwFrilCC+CBDMnq8EWJNlT+TbN14JowqZ1TOgbQB22i/C4opl0gK8OcseJzT5E50o7H42pRhhbiBBvk2iQhHWTtaccG3KpD1wawKMr9UDj2jyUanOOWQpvCua0pRIOL0AJMkC06+tDEeKqLZXnjuFpsEG9zGwqPYylLeyz7wxDklnblQQYAjqvFA/6cH2Mg5ufyAtkHhXRQuAXTpsSBam53NYLran4hq5E9oRWy+pU6CrcHOCcOr2Xh0NfHFRZ9kYcWYECuEOdWKPboFOkm6dEhHEY55qijoPlQGUS+sD0LuQ8hAtCkIJbyIMdLcuT8fBO+ejou4MJH5NokIQGOq0WtO8j+bCevvq9ORnB95YOPgjkHtFf1MzpV8F/ogjIzniut1q/Zi9e/q9dntDKZyoZUOPSNoQBKhnsUOOQVMG2ILQW9T2L2zk+FHLshfInnOV+lLmaIx9nEh+NqoTyPWTLNAlm5pf0HngtiVcpVRjp6Rwi+HleLWPaZJ8yGgyKOAIMgGKkcrxliCJ/igN6ff6WOtzWCz9ELwpAFsJ6Ar2iDt75rtkAb3k0961ueK7HmaMP9/9DVWL8SrwK3we3hDb2pFA59D6SRCv2SIrQAAzBHzvjHQo49y6UYXozfqTbaK7STMda11DcHtNPifQADuMY2bu5BBt/EUhDrN46rxf64WlwBHxBj+CU/gH9HZACDdpKY5DlDzlsKiVDtz3Nkf35JvT9fvd6fZ8fjsemH1GeAh0qB/oHesHwtNnO0gX2POXr5E79n7wp0ZcKufCDMxp8Bfzv0/4xfhb7xg2/hPeO6ekPRjxHs+/es2XI6lTuUTC7M0c4/k+Mx1JwHYLbcnTPtSqp7z6nPJvaYn5UxrVcZ5j3niUiydWSOBJ8jBaf1qlrH22C+v/1P0nLUZ5jnx8yTHK8psP8WYyMj0G8xW+7mRLIOBqI0Fd971+KDFMMYwN/Rk6Ic4LNNlOgFbY1+QHPiiICt0YZ512j7PWEUYhfPbopR4JqC8URY5sQxB4RnSvQz9sXwnlsCGsFV+uc21PjCbyj0OcZT3BM+Y6gvcku78iBDI2SOJEGOXm9P6V5faJeRKAjBqQzAMrAY0dI0HbrA7CHrwiP63G5O+B9oi5bj/9DRopD59HvcNu9L/HvS5rg9HymdBX7NLeM5L1SEFkB4kzXmtKYbxvMMCm5MpUBWjAWxhLSpCwuZUB7kEATBE02M4Ay39NzXHNBpJXWBrZjYow2BOWGNYdeoaNGHEJ7GSzkKDNprPIbISn3+XogT2xyR306A6RTIyi3t3gtiCaNgi64bc4pL0tZXBEF4gc0IPqffM7qPaKM69kWkNoavCFMQoaTZFSmnuMbfGYA5bim0KUeBa+5JPxLnkoIvDI+ytGceZBDSQFnacw8yDE2UBbGEUXCPuZiZ9zvaBUEYBpsRrOhPMf6OXjhSOk9REs5gLwL3b8pUzwK/JPVo8Dlpyz8F9ujo1ikyT3II8aMwZzH5dJIOQYa5mOUTUs1XcCPHPIc2pO/4FoTJYzKCM/o7B/wdvaikHvHzSYlbNPiO4Rfpc9yiCmOIAtekbERKFDgNtoY2H/e2C+mgLO0pr1e5pX0MjlUhLA+YAwlnSLaBICSPyQhWPY3xgXGkX4VAOfYfWtFxMZ7GEgWuSfmsXcoK8ZSwZdFkPoQQkqBJgawUI1lSEEvwxRpz9s0NsncKQtKcMoIL+oksfEU2JBe2mIuc2BjyrKprCu2YosA1RWgBOpAjUeBUSOkoiRCWEnuBrBSLqeWW9u+Mb18RwpFjTosumPb9z4KQNG8ZwX2dD/ze0+dMncKh75CKzi0SBX7NBelFg4vQAgiNsSn3oowJL1GW9hT3ZymIJfhkj3lPl7RoQUiYt4zgPs4HPpKeMRArW8yVCm0U/YjR6+eOMQpcU4QWoAU5cpY0NUz3BaeY3ioMh8IcxbokLcdJhr0g1taLJMKU2GC/NqnwI4ogCH3y2gjuIwp8QM6m9Y1L1PSC/qPBOd2Np7FGgWuG+L6HoggtgNCaMrQAQlIoS3tK0eDc0j7mfUUIS4E5GPEJ0XsFITleG8EuKa41OeON8oVCYY4A2ehb0Skc+o45ClyTgmKZI1FgQRg7NsPwljQyCKQglhASW1o06OcvhbkkCELFayO4cPy8H8j9fENROPS9pj8vZYZEgW30+X0PRR5aAKET16EFEJKiZBwFsnJLuxTEEobmAfjT0H6BOGIEISleGsFXuEWGDohiPSQK8/kuG3k/YkgUuCFFaAEMZIgxNUakerTwFsrSnkLmihTEEmJgjdmpdIPowYKQDC+NYNeNcEoGTihcoqh3wNxx/IzuxtNUosA1MUeDi9ACCJ2wFTGS9Vd4C0XaBbIypCCWEA+3mOfTGnddSxAED7w0gl1SoqZm4IRijVs02NXRIfcCtyPGCEuGRIFTxWaoSCRYOIWytMe4VtXklvbCgwyCUNPk2iQ5FigICVAbwVe4FcSaooETgj1uzoac7oUb5uhUny5M1UlyQ3we4SK0AEJnMkPbE7IGC6dJtUCWrSDWATE4BP9s0OfQTyHXJglCAtRGsGthjCkaOKFQDn3P6O7xLxzGnbKTpAgtwAvmSBQ4ZUzrtESBBRMlaRbIyi3tG6a7twhhucd8a8cn4j5mIAiTpw8j+AeyCfmkxOyBtJF36DPHfj2FCeXQN3X6OIvdF0VoAYTO5JizdSQaJthQlvYYU6JtMokDXgjFHrvuvCHODAtBEHg2gi8dPkP1IIfQjsKh7wXtDWEX5eg72nCfMkVoAXB3ZAhhyS3tYgQLNhRpFci6xVwQ6xHJgBDC8gB8NrRfII4aQYiWd7hXsBXlyz8l2rjsatTc09x5cY5byf/CoW+MPKINyjZn6O/Q33nIjImiQ59H3BxkQj/cYk5jD56NM1vuspDjB6Y8rhZlaCEaooCPhvZ74rniJbe0J2VcyBxJZo60pcBccPIOrSeLrix4Z7bcnROXc9M3D8fV4qR+9A63L8d0xkgYljXdjeBL9KK9bfDee7oXTRtjFHiP3szafvf3hHMIzGkv7xP63ylGcFjOsSv7QYyB2XKXo5/ryT8js+WuLtBURK7srzEbwXWBrNBHnOaYCzEmURBL5sgzCc2RLuToqPApXUmhde3SjzjClKkM39qhacqmmQSz5e4JPQfXrw3id7idV9w69D3FnHjOUL5kT1ypVw9oJ0TXQkcF9iyAeiJ1pXDoGzMF3YzgUAXC8g59CuKch1NDEdkdqbPl7got1+QV+xecodeE29lyd39cLVRgeU5RYt436gJZypM8p8gt7VEXxKqU0A1SiPAl9Ry5my13n4+rRRFYnj4p0Xv8txPtZ+g5lfkRR5gq1f68QYzfl1ygC9Xdz5a7/Lha/HKgukaCt46CvUWOFjY2fhLfAlYAf3fse402ckrDe26RKPBblLRPR68rcxcDyGOiiyOj9tjHWChnShTYryXLhxfjmdlyN0ev+y5X6o2ZM+DbbLkjYkNYYTbO2hyXGYrc0h5tKnRlAG8RJ5GJT7Pl7vy4Woxpj1FonenUmn2NXtMLP+IIU6MygLfI/nyKM+Cv2XL3n9oQ/gO3ynUxRUanyBa3lPTCsX2ovimgOvS5x3+lyC7p7FO+0ioWcuzOwB94jgKjn3vZYO18qxwGMaKIu0CWrSDWT+LWPdaIAdyEjyM8J50j1yYJ4dgg+3MTVOWs5A/cFmtRlMOjHPrecdooy+meTjHmKHDNlvYOCN93cXZNZ1c9yyG0Q3E6ra7mgP8ocIakd7ahCC2AAWVpDxmhyy3tyoMMnagcH1KFvzlFaAF6Zk+z51euTRJ6pao/ICnQzagzM39dkdQFKYoVBwqz59HGKWWncPhMl74poTr0KXqWwUSXKPAUHBixMkdHuJoo0bf4d0LmnsdLnZiNIVs6cV0gyzdz7AWxlBdJupGHFiAxriPOmOjKFvO1SZdMR0cS/JGHFiAxcnAzgoV4KBz6vpWimyFR4CYo2jsgutzT3JUu40R71m7EnKPn8D80y8z5gP80aJA0vtZEnO5ZYnZk+85aqckt7cqDDC5koQVIkDGuKwX6isFTfCTM/BLGi2RpteNittydixE8DhTdo8FvKTuFgywufVOki9FY9C3EG+S0d2TEftZubMzRz09J82KAXwlnCMg5x3GhLO2FBxlek1vaxUk3PsZoBIPWq0xn7xWSFi0IIbkSI3g8KIe+xYv/zujuUZpSFLhGYd7o3sJHNLjo0EcUzGE5R8+vAu1s+AcdEWiasv6BsGc1XY5dCPGhMK9dF/iNbDYpiFX6EUXwSBlagIEoMe/DZyRw17UgjJjyXWgJhN5Y0+0MKGjF4xb3a3EKh76pskcrkx9b9ssZLqKX0z4K/MT4N+QMf8/oOb9HOOZ0P2JQF8EK/fuUSOGNtpShBbCgMK9dOf5S73NLu/IggyslkpbYljK0AAOyRu87pmuT7hEHtODOE7I/t+K4WogRPCL26IW06x3L9+jolO1e0lNMMQpcs6a9EXyN3hy3fQtDN0OvS5/UuCY9BfUR7aAqA8sB2ghP7fsLyeNxtShDC2HBtnbdofeGoYuwzUm7IFbNhrgLosXG4bhabEMLMTA5ev0+FaD4gtYD5CiS4MKG9nrolPkBUhhrbKxpn5pbc41bpKlw6Js6JdoJ0JaiXzGAbkXNDoSPMgq/cwD+REeTy7Ci/ELRfX2ZIkVoARpQYr/pIR9ejFFEgTmuFhvMBZGE35lCBHSPvQiW8iCHMG5c9P8psgY3I1giAvGxx82Y6Vr4ZspR4BrVoU8dDe6TokOfNXLndywc0NdrzIlMQTyuFk3uwBQ03yuDKAWUpd3HOfTc0h7VXLCQI8poEx6Pq0URWghPbNFFDU9xSVrPuBAZVdZRyJohKfG1zkB5h1se+Tn9K88lw99BPGe8ufMF/tOxCs/jxcgW/dy2dQ7d019KdNZhfBAvdAw8opWgDRE7JI6rxWa23H0AvoWWJWJ+kJYyotDP3ql0zbpA1nag8UdVEOu4WjzMlrsc/b12qdExBR6Z3nVS9+h/86lgw0f0+r/1JI8wMo6rharu3e56LHIKfD+uFr/253e4FTu5ov8JqxheKS8Y70NSoiOzvgxhiQI/s6a9EXqDdsqUPYxfdOgjv18YntBrZ/0qw4nSjmqjfaDb8z5mnoD1cbVIMaKjCFcgK7e0J/d9Vs6iK7TsXetsjJEDeo4UoQUJRI6eR6ecIxu0PhCtI1SIm+NqUcyWuy167ZFrDZ95Au5fZ2jVRnBXRWYII1hwp8CfEVx4GicFNnTLrChwTzPN6DaPk1MwHXjCj7Fp+h0OjOBuyONq8QBkldc5QytuU2abeIGfUAWy5piNxGSr1lfpibcyR36R+hzpgwf0fv/lRPsZ2iFlO0MsCCep5tlV5YjLGIHO4cAevfa8WXiuNoK7kjEtJToVSrql5rZFooj/S0H7VNG7ql/pMG7eoc9PplWRUuHHaaM47YQ6Y0RXYlSKvgoshuBOiX3PyOn/uc0t7arn8bwjc0R4xRpt5J6aazeMaI8QwlEZflPS8VrzB26R3KwfMYQBKEYyRmps6FYUpXAYc063yL9sssNwj/kZKJi2Z1aIE2VpH+Kcc25pVwOMKQihucW+R1wZ2gVB6IE/cPMSnCFpG7GyZdgCYxIFfpv6vua23NHdMCo69Ek2zTAB9ph/kzrlTRBiQmFWzOsCWX1hK4j1A9ljhHFiq7Qve4QgeOAP9GR0uddOjOB4GTLSVwz42amjOvbrEmmZ0y0KXHToIzRnjXldvUEyaYT4UJb2vMexbJ+lehxLEGJjg/3apMKPKIIwTep7grcOn3GLpPbFSl2oqW+SurIiACU6Ut6We9rPpaLDOAckCuwDm1ND+RBCEFpgc5y6ZKy8ZM5IC2IJQgsKzM7ST4izVBAGow8j+Ix+vcNCvxSJfObY6BKFr4smNeWc7meB5QqG4dlidoZcIHNJiIsS+zGavIdxbJ+hehhDEGLHlhYNei5IoEkQBqA2grsW86kZomCG0A+KfqPBP5FrsZrwQLcz2W2iwV3nnerYT2iPrUjWPXJ1ihAXytLex36fO8ogCGPhAfjT0H6BzAdBGIQ/Xvy3S+rRBWIIx0yfZ4OLHj9r7BQd+jTNrDin25yTgmZ+aVIkS6p0CzGhGLZAlhTEEoTfWWN2mt8wjYxLiXgLXunLCAa59iNmFG6R/hqJArdjS7cofBPj9h5tQLVFDC7/SJEsITWUpT13+GxbX1mjhCmSY9bT1ow/a+gytADCtHhtBLukzZ4hUcJY6Xptz2uKHj5jahQd+lxgVhS7RoF/Ihenh6JJkSxxIgqxMFSBrDn2gljbDp8rCKlTYr82aQzF4qQeiRANf7z6u3L8vI9IRCNW1rhFgyUK3A1Ft++9MLTd0i0KrDr0Efphi71IlhwpEWKhZJgCWbY+EgUWpswG8z4xhmuTpuiIFwd3pLw2gl0NJZCIRqzscTOCRDnpTpfvzhQNLjp83hNiBIfGViTrE+NPdxPSQVnauzhtcscxBWHs3GPOyvwEXHmSJQTz0AIMwJh/r6R5bQT3kTYrlezixSUNRVJYutN1Tr2lZOaYi8r0LYPQH7YiWSBrpxAPin4LZNkKYn1H9hlB2KPniokN6QabSkv73IMMvpkb2kz1QoSBeW0EQz/R4BtE6RaEmj3mFKdTXPK/SmbR4XMOiHEVC7YiWdfYFSBB8IWytLeJBueOYwnCVHgAPhvaL0hXxy4t7ZkHGXxjigSL4y8gbxnBfRVR+sg0SroLQhOKHvrldIsCK2ShjQmb4bAmXS+/MC5susANzSI3c6QgliC0ocB8Lv+OdB2mpn9X5ksIT5xjrnq99SSH8AZvGcHQTzQY4BtiCAsCNCs08xbXPG8KXQsnpeoxHitbpEiWkAYl/RTIsr1H1ihB+F9yzLq4Is30YVNxrGvG5QTOLO1TLBQWDaeM4D39Ga/fEIVOEMAtGpzR7Q6979jTjwT/NCmSJcU0hBhQlva8wWfY3mMbQxCmSIlZfz4jzbmztbSnGuF+i9zSvvUgg3CCU0Yw6IP3XSJXb/GFNCeqIPTJlm5FEK7pHilRHfsJw9KkSJZEx4QYUNgLZJmUVimIJQjdUcAPQ/s16V2btLW05x5k8ME55mMgP5G1LygmIxjsqRhtuEOH/ec9fZ4gpEhXw6ZLFFjudo6bJkWycj+iCIIRZWnPO7aBOHsEwUbOuK5N2mM37DM/ogyKLQt240UK4SQ2I7ikXyXsEm0IS3q0MFUU5s2s77GEuJEiWUIKdC2QNcccCXlEzsQJgo0mRxQVae0VNgOw8CHEgJxj39+VBzkEAzYjGPSD+rXHMc/Q6dFb0vJcCUJfKA9jPHkaR3Bji7lI1hnpKwNC+pR0K5D11v97iUSBBaEZW8zXJl2S1l6hMAcEUr8ucI3ev08hx0AioIkRDNqb0feFztfAf0m3up0gdKWv6uu2MYQ0sBXJ+og4DIXwKEt73vD/1RyQdEBBaEOBWRf/SFqGo2rQnlJ0uyZDHwE1ITpaBDQ1gkH/qH0bwqAflH/Qm2E2wOe/Zu5pHEE4xZ5hlb8DEgVOiT3N0qIFISSKdgWybAWxNkgkRBDacov92qRUDEdbQCDF6tfn2PW7n8gxkCh41+K99ZmELeYQf1duqtcT+gFS9PeQzNELxy06Ai0IoSmwewq7ohDlMjUUen09tT5dow3laIzh2XKXoWW+olvhtrFwQO+Lm+NqocKKMjgKHW06Rc6zAphbPiuaZ3koZsvdHD1vM2SOPFDpdsfVQvan7pRo/eHLifYz9Pdc+BHHidoB/M3wnhue98fYOaeZjZQPLciL/TnD7IwcO09Ua89b+/PseDy2/cArhjOEX1MrFw/Vn3vshvG8el1Vr4x+HoCfpB9BLtBVBLvwb8ZVabj1g1/R53OwwVw0pivv6edu4ILuz8tnwmzCW04bkqFkasoV+ojIKQ7otS2oAjlb7s7RSskQz27qPAG3x9VirF7+OTpzy8T76k/T+x4ZeYr/bLlbY3YYTJUDkB9XC5+p8AWn97JUdTub/vDD0j7rVxwnttgDVB+IOypcR4Bt/45B9ZBqf24ixxR5RK89v/bnNunQNQ/oBWPoM42gDe0b9OL1N1pBPFavEj1xtpVM9f//p3rvF3SkbcoeECFuhoiEfKcfA1jwzwPmIoRnBI6eVRvsFjGAT3EBbGfL3VgNvJJmBbJyy3tGHQWeLXcKMYBPcQb8NVvu8tCCJE6OWQ9PaY221cUAHS1Ww4vSiXpftBmejwxvADeRY6pc8mp/7mIEw7Mh7Ouql7e4QP/Q10w7zUhIly39n7NXPX+e4JcCszJwR9ioRYGstzbO0BttKufy2qIs7TkTLog1W+4KhjvqMibWVbq40I09aRXBMtH06tQ79NoR09paZ8fa9sUDw6dBbxrIMXV+O2fe1QgG/dBeMUyxLEGYCn1GRH4yrpT1KRJtkazKeyrRrWYEj9oPiMJeIGuSBbEqo67rEZKpMeY54ost/V5hGhKF+brAmhueA3GhuaeZAVy/d7BjMlVmhUSAm3E5W+7uwc0IBr2RZTR7cAVB+F8U/WVUqJ4+RwiLwpxyekkzr3nf5AHGTJmxRGneQjn0LXqSIUbG/JsPwc2IMyZ8McQVpqHIaWZPXKCPPW4Ic8VqhjZov9CsPpKP88yy9rQjB3cjGJ6rRv/Zw2cJwhTpwxv+hBjBY8Jm5Bb4Twkb6znXoTgb8dngrmvWT8ZdsyALLUCCjHWO+CTHT50eH+Q0D6zdoOsAKfw8Rxk68vs3zdOOfRX0yjyMMSYuoR8juGYN/IvxeKQEwRcK9w1M0srGRZMiWcqPKL+QVKv2jDXKVWIvkPUWql8xomOsv/eQZKEFGAEPjCvDIqddhukdunBufbZ43qMsV+jvtkQbv232QZ8VrX3c2DMqZstd1qcRDM/nhD/3/LmCMGb2uC2UB8f+QpwU2Kt/Zl4k0Ywl0iD0g2r5flmnhLcY5fnwAKzp5piKlZz2GaaX6BTlf9D2yJrnu3KbkqENaYU2fP+LPuff5qaZA/paUdWij+Cffd9GcE2BvitwLBPyM5JvLwyLSyRXIYrEGGlSJEt5kKNmrHffDkkZWoABUbRzjKhhxIiKMrQACSLrSn/cMi5nZZ1h2qVuyiW6kOM3dAS3vkZ1+8br5TWrrles/uS5YrRPQt7WkyTH1eJhKCMY9K04gkQAAAKqSURBVGaQob0hKRrDB3Q6xnu0US9GhjAkJd0LzEkq9HhRmNfPC/ylwY32WpuBeDquFmVoIQZGtXjvFNapbWgBEuNwXC22oYUYEXWNnjFRZ5j2VQX7+o1XH9cKHdCR64wwzrBtgDFT5gf0eyb4FFvSMoYP6MjvHL2YlAFlEaaF6tDnO/KMjh1bNLjvM1Cn2DCuKMPQqNACeKCpYTv2glg1MkfaoUILMEI2jOfapJo6K+pfxGlHfEcb6iEdfSrg2CmiwI8RXLNFG8P/Qj8wsW0UP9GH2M+RyK8Qhi3tF3jVvxhCZDQpkjX45ltFNYuhxxkJj8fVoggthAdKmq1Zalgx4uC4WowxEjcUT8h6MhQF4yxSW98PHEtQrc4WzQns5KsyKsbm/BiKH8fVYgN+jeCaB/QDM0cbnT8CyFDziE5feI+eWCqgLIIA7Z7Bn0gKzFQoiKBI1nG1WCP3wtt4ZFoVb5WlfVIFsSrl6kNoOSLnANxWTgOhf8bujNmi19j3aMPPZ1DtCZ0tGoXx+5LjanGP7M82HnkxN96Fk+NXRVyFjr5mL1595Oe/xRO/H4YvBxpHiJ+uXsShi3godHGLJldtTOGMnaCp08G+Gd6j8JAWfVwt8tlyV1/JIdcy/M534H5iyr3CrHBP7iz5cbVQs+Vuj16juxTXGTM/gXwC5+VD84AO8nwJLciAlOh98R6tN2UMY0M8otexDZEXcqv25xL9ncj+/DtfgeLl/jw7Ho8B5TnJOTq//gqt1NV/Nt1MDugHtaxeDy/+LgiCIDgyW+7O0YpHvVZPlT3aqboRxV54zWy5q5Xzqc+RB/QcidqIEEZBbUNk1Z/1321G4WvbYVv9PTmn5ov9OcNPzZBYKXlee8rXjbEawU3IXv09yQdVEARBEARBEARB8Mf/AwYeLqV9M02PAAAAAElFTkSuQmCC" />
          </pattern>
        </defs>
        <rect id="gr_logo_KOB" width="482" height="48" fill="url(#pattern)" />
      </svg>
    </div>

    <Transition>
      <div v-if="transitionScreen == 1">
        <h1 class="text-center mb-12 mt-20 text-3xl">Sign In</h1>
        <form @submit.prevent="handleClickLogin" class="px-12 min-w-[20rem] max-w-sm mx-auto flex flex-col gap-3">
          <!-- username -->
          <label for="uname"> Email Address or Username* </label>
          <input id="uname" type="text" placeholder="Username" required v-model="username" />

          <!-- password -->
          <label class="mt-2" for="pw"> Password* </label>
          <div class="relative">
            <input id="pw" :type="passwordInputType" class="w-full" placeholder="Password" required v-model="password" />

            <!-- reveal password -->
            <div class="absolute top-0 right-0 h-full flex flex-col justify-center mr-4">
              <button :class="{
                'pass-visible': passwordInputType === 'text',
                'pass-hidden': passwordInputType === 'password',
              }" class="transition-all" type="button" @click="handleTogglePasswordInputType">
                <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none" width="14.997" height="12.998"
                  viewBox="0 0 14.997 12.998">
                  <path id="icon_view_password" data-name="icon view password"
                    d="M1718.325,623.832a.573.573,0,0,1-.066-.707l.022-.03,10.821-11.133a.191.191,0,0,0,.033-.044.251.251,0,0,0,.037-.045l.688-.707a.551.551,0,0,1,.394-.165.537.537,0,0,1,.385.164.566.566,0,0,1,0,.8l-1.331,1.37a11.308,11.308,0,0,1,2.634,3.945.6.6,0,0,1,0,.444c-1.569,3.755-4.355,5.992-7.456,5.992h-.008a6.73,6.73,0,0,1-3.958-1.34l-1.42,1.46a.54.54,0,0,1-.388.165A.519.519,0,0,1,1718.325,623.832Zm4.511-3.847a2.883,2.883,0,0,0,4.057-.772,3.017,3.017,0,0,0,.511-1.714,3.094,3.094,0,0,0-.5-1.694l-.8.824a1.925,1.925,0,0,1,.205.87,1.851,1.851,0,0,1-1.821,1.877,1.777,1.777,0,0,1-.849-.21Zm-5.8-2.262a.581.581,0,0,1,0-.443c1.566-3.75,4.353-5.985,7.448-5.985h.006a6.533,6.533,0,0,1,3,.738l-2.442,2.515a3.315,3.315,0,0,0-.557-.053,2.969,2.969,0,0,0-2.925,3.012,3.562,3.562,0,0,0,.051.572l-2.708,2.786A12.149,12.149,0,0,1,1717.031,617.723Z"
                    transform="translate(-1716.987 -611)" fill="#c0bdcc" />
                </svg>
              </button>
            </div>
          </div>

          <!-- persistence -->
          <div class="flex justify-between items-center gap-2 my-8 px-2">
            <input type="checkbox" name="remember me" v-model="remember" id="persist" />
            <label class="mr-auto whitespace-nowrap" for="persist">Remember me</label>

            <a class="text-secondary hover:text-primary transition-colors whitespace-nowrap" href="/forgot">Forgot
              password?</a>
          </div>

          <button id="submitbtn" class="w-full mb-8 relative z-10" type="submit">
            Sign in
          </button>

          <!-- error -->
          <div class="relative">
            <div class="alert alert-error shadow-lg absolute" v-if="error">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6 pointer-events-none"
                  fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ error }}</span>
              </div>
            </div>
          </div>

          <!-- btn background effect svg composition layers -->
          <svg class="pointer-events-none" height="0">
            <filter id="btnbg" x="0" y="0" filterUnits="userSpaceOnUse">
              <feOffset dx="4" dy="10" input="SourceAlpha" />
              <feGaussianBlur stdDeviation="28.5" result="blur" />
              <feFlood flood-color="#005bc4" flood-opacity="0.353" />
              <feComposite operator="in" in2="blur" />
              <feComposite in="SourceGraphic" />
            </filter>
          </svg>
        </form>
      </div>
    </Transition>

    <Transition>
      <div v-if="transitionScreen == 2" class="bars">
        <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="255" viewBox="0 0 299 279">
          <rect id="bg" width="299" height="55" rx="22" fill="#0075C9" />
          <rect id="bg" y="112" width="299" height="55" rx="22" fill="#0075C9" />
          <rect id="bg" y="225" width="299" height="55" rx="22" fill="#0075C9" />
        </svg>
      </div>
    </Transition>
    <Transition>
      <div v-if="transitionScreen == 3" class="bars">

        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:ev="http://www.w3.org/2001/xml-events" version="1.1" baseProfile="full" width="auto" height="255" viewBox="0 0 299 279">
          <title>Text Pattern Fill Example</title>
          <defs>
            <pattern id="img1" patternUnits="userSpaceOnUse" width="289" height="324">
              <image xlink:href="/image_480.png" x="" y="-23" width="289" height="324" />
            </pattern>
          </defs>
          
          <rect id="bg" y="0" width="299" height="55" rx="22" fill="url(#img1)" />
          <rect id="bg" y="112" width="299" height="55" rx="22" fill="url(#img1)" />
          <rect id="bg" y="225" width="299" height="55" rx="22" fill="url(#img1)" />

        </svg>
      </div>
    </Transition>





    <!-- {{ transitionScreen }}
    <button @click="reset">reset</button> -->
  </div>
</template>

<style>
/* we will explain what these classes do next! */
.v-leave-active .logo {
  transition: opacity 0.1s ease;
}

.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-leave-to {
  opacity: 0;
}
</style>

<script setup>
import { request } from "~/api/utils/request";
import user from "~/api/queries/user";
import { KIOSK_EMAIL } from "~/api/data/users/UserFactory";
import { useLazyQuery, useQuery } from "@vue/apollo-composable";
import { exit } from "process";

// const reset = () => {
//   transitionScreen.value = 1
// };

const username = ref('admin@gymrevenue.com');
const password = ref('Hello123!');
const remember = ref();
const passwordInputType = ref("password");
const error = ref();

const transitionScreen = ref(1);

const handleTogglePasswordInputType = () => {
  passwordInputType.value =
    passwordInputType.value === "password" ? "text" : "password";
};

const authCookie = useCookie("auth");

// TODO: would be better as a server route, but we would have to use Amplifiy adapter
const handleClickLogin = async () => {
  error.value = null;
  const authenticated = await authenticate(username.value, password.value);
  if (!authenticated) {
    error.value = "Credentials not found.";
    return;
  }

  authCookie.value = authenticated;
  let screen = 2;
  transitionScreen.value = screen;
  let intervalId = setInterval(function () {
    screen++;
    if (screen == 4) {
      navigateTo("/dashboard");
      clearInterval(intervalId);
    }else{
      transitionScreen.value = screen;
    }

  }, 700);
};

const authenticate = async (username, password) => {
  const result = await request(user.query.findByMail, { email: username });
  // Password: "Hello123!"
  if (!result.data.data.user || (btoa(password) !== "SGVsbG8xMjMh")) {
    return null;
  }

  return Object.assign(result.data.data.user, {
    isKioskUser: result.data.data.user.email === KIOSK_EMAIL,
    notifications: [],
  });
};
</script>
<!-- #C0BDCC -->
<style scoped lang="postcss">
.logo {
  @apply absolute w-72 w-96 left-0 right-0 ml-auto mr-auto;
}

.logo-screen2 {
  @apply bottom-[90px]
}

.logo-screen3 {
  @apply hidden;
}

.bars {
  @apply absolute left-0 right-0 ml-auto mr-auto bottom-[190px];
}


input {
  @apply bg-base-300 outline-none;
}

input[type="text"],
input[type="password"] {
  @apply bg-primary transition-colors duration-300 rounded-lg px-4 py-3 text-opacity-50 text-white;
  @apply active:bg-secondary active:text-white;
  @apply focus-within:bg-secondary focus-within:text-white focus-within:text-opacity-100;
}

input[type="checkbox"] {
  @apply rounded-md bg-white appearance-none m-0 h-5 w-5 border border-[#C0BDCC] outline-none;
  @apply focus:border;
}

input[type="checkbox"]:checked {
  @apply bg-secondary border-primary;
}

button[type="submit"] {
  @apply bg-black py-4 capitalize rounded-lg border border-white transition-colors duration-300;
  @apply hover:bg-secondary hover:border-secondary;
  -webkit-transform: translate3d(0, 0, 0);
}

.pass-visible {
  @apply scale-150 opacity-25;
}

.pass-hidden {
  @apply scale-100;
}

.st0 {
  fill: #231f20;
}

.st1 {
  fill: #0075c9;
}

#submitbtn {
  filter: url(#btnbg);
}
</style>
