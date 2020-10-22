

export function checkAdvertisement() {


    let Rewar = wx.createRewardedVideoAd()


    Rewar.onLoad(function () {
        Rewar.show()
    })
}
