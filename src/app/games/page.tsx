import JoinPartyButton from "@/app/components/games/JoinPartyButton"
import SignOutButton from "@/app/components/SignOutButton"
import { AuthGetCurrentUserServer, cookiesClient } from "@/utils/amplify-utils"

export default async function Page() {
  const partys = await cookiesClient.models.Party.list({filter: {status: {eq: "Waiting"}}})
  // const player = await parties.data[0].users()

  console.info(partys.data)
  // console.info(player)

  return (
    <div>
      <h1>Page</h1>
      <JoinPartyButton/>
      <SignOutButton/>
    </div>
  )
}
