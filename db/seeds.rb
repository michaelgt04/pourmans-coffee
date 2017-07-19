# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

Product.create(
  title: "Dark Chocolate Brownie",
  description: "More chocolatey fudgey goodness than you've ever had in a brownie.",
  group: "food"
)

Product.create(
  title: "Bacon Fat Molasses Cookie",
  description: "Whoever said bacon makes everything better was right.",
  group: "food"
)

Product.create(
  title: "Chocolate Chunk Cookie",
  description: "There's nothing better than a well executed, simply done chocolate chunk cookie."
  group: "food"
)

Product.create(
  title: "Coconut Cold Brew Coffee",
  description: "This will be the best coffee you've ever had. I mean it has pounds of coconut in it."
  group: "drink"
)

Product.create(
  title: "Classic Cold Brew Coffee",
  description: "Just in case you don't like coconut. Smooth as silk from our nitro taps."
  group: "drink"
)

Product.create(
  title: "Watermelon Agua Fresca",
  description: "Incredibly refreshing summer drink for when Boston starts to feel like a swamp."
  group: "drink"
)

About.create(
  blurb: "Yes there's five pounds of coconut in our flagship cold brew. Yes it takes us three days to make. That's how committed we are to providing you with the best coffee in town. We may rove around and that town may change, but you're going to want to find us. Two dads taking on the big guys, making better quality coffee using only the best ingredients. The coffee roasted just for us by Dean's Beans and all the baked goods made from scratch. Check out where we are near you and come down to get the goods before they're gone."
)

Event.create(
  day: "Tuesday", 
  start_time: "11:30am", 
  end_time: "6:30pm", 
  location: "Dewey Square"
)

Event.create(
  day: "Tuesday", 
  start_time: "2:00pm", 
  end_time: "6:30pm", 
  location: "Lexington, MA"
)

Event.create(
  day: "Thursday", 
  start_time: "3:00pm", 
  end_time: "7:00pm", 
  location: "Salem, MA"
)

Event.create(
  day: "Thursday", 
  start_time: "2:00pm", 
  end_time: "7:00pm", 
  location: "Wakefield, MA"
)

Event.create(
  day: "Saturday", 
  start_time: "9:00am", 
  end_time: "1:00pm", 
  location: "Wakefield, MA"
)

Event.create(
  day: "Sunday", 
  start_time: "10:00am", 
  end_time: "1:00pm", 
  location: "Wilmington, MA"
)
