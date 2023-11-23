export const getRocketImage = (name: string) => {
  switch (name) {
    case "Falcon 1":
      return "/falcon_1.svg"
    case "Falcon 9":
      return "/falcon_9_payload_block5.svg"
    case "Falcon Heavy":
      return "/falcon_heavy_b5.svg"
    case "Starship":
      return "/starship.svg"
    default:
      return "/falcon_9_payload_block5.svg"
  }
}
