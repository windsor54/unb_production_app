exports.render = (req, res) => {
  res.render('index', {
    sTitle: 'UNB-App',
    title: 'UNB Production App'
  })
}