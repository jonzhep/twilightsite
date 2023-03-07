import { Html, Text } from "@react-three/drei";
import appState from "./state/appState.ts";

const textConfig = {
  anchorX: "center" as const,
  font: "/Regular.otf",
  fontSize: 1.2,
  color: "#ffffff",
  // rotation: [-Math.PI / 4, 0, 0] as [number, number, number]
};

export function Ui3D() {
  const { isMetallic, isBump, setMetallic, setBump } = appState();

  return (
    <>
      <Text
        {...textConfig}
        position={[0, 2, -2]}
        fontSize={0.06}
        rotation={[-Math.PI / 50, 0, 0]}
      >
        Abstract. A purely peer-to-peer version of electronic cash would allow
        online
      </Text>
      <Text
        {...textConfig}
        position={[0, 1.95, -2]}
        fontSize={0.06}
        rotation={[-Math.PI / 50, 0, 0]}
      >
        payments to be sent directly from one party to another without going
        through a
      </Text>
      <Text
        {...textConfig}
        position={[0, 1.9, -2]}
        fontSize={0.06}
        rotation={[-Math.PI / 50, 0, 0]}
      >
        financial institution. Digital signatures provide part of the solution,
        but the main
      </Text>
      <Text
        {...textConfig}
        position={[0, 1.85, -2]}
        fontSize={0.06}
        rotation={[-Math.PI / 50, 0, 0]}
      >
        benefits are lost if a trusted third party is still required to prevent
        double-spending.
      </Text>
      <Text
        {...textConfig}
        position={[0, 1.8, -2]}
        fontSize={0.06}
        rotation={[-Math.PI / 50, 0, 0]}
      >
        We propose a solution to the double-spending problem using a
        peer-to-peer network.
      </Text>
      <Text
        {...textConfig}
        position={[0, 1.75, -2]}
        fontSize={0.06}
        rotation={[-Math.PI / 50, 0, 0]}
      >
        The network timestamps transactions by hashing them into an ongoing
        chain of
      </Text>
      <Text
        {...textConfig}
        position={[0, 1.7, -2]}
        fontSize={0.06}
        rotation={[-Math.PI / 50, 0, 0]}
      >
        hash-based proof-of-work, forming a record that cannot be changed
        without redoing
      </Text>
      <Text
        {...textConfig}
        position={[0, 1.65, -2]}
        fontSize={0.06}
        rotation={[-Math.PI / 50, 0, 0]}
      >
        the proof-of-work. The longest chain not only serves as proof of the
        sequence of
      </Text>

      <Text
        {...textConfig}
        position={[0, 1.6, -2]}
        fontSize={0.06}
        rotation={[-Math.PI / 50, 0, 0]}
      >
        events witnessed, but proof that it came from the largest pool of CPU
        power. As
      </Text>
      <Text
        {...textConfig}
        position={[0, 1.55, -2]}
        fontSize={0.06}
        rotation={[-Math.PI / 50, 0, 0]}
      >
        long as a majority of CPU power is controlled by nodes that are not
        cooperating to
      </Text>
      <Text
        {...textConfig}
        position={[0, 1.5, -2]}
        fontSize={0.06}
        rotation={[-Math.PI / 50, 0, 0]}
      >
        attack the network, they'll generate the longest chain and outpace
        attackers. The
      </Text>
      <Text
        {...textConfig}
        position={[0, 1.45, -2]}
        fontSize={0.06}
        rotation={[-Math.PI / 50, 0, 0]}
      >
        network itself requires minimal structure. Messages are broadcast on a
        best effort
      </Text>
      <Text
        {...textConfig}
        position={[0, 1.4, -2]}
        fontSize={0.06}
        rotation={[-Math.PI / 50, 0, 0]}
      >
        basis, and nodes can leave and rejoin the network at will, accepting the
        longest
      </Text>
      <Text
        {...textConfig}
        position={[0, 1.35, -2]}
        fontSize={0.06}
        rotation={[-Math.PI / 50, 0, 0]}
      >
        proof-of-work chain as proof of what happened while they were gone.
      </Text>

      <Text
        {...textConfig}
        position={[-1.3, 1.5, 0]}
        fontSize={0.4}
        rotation={[-Math.PI / 4, 0, 0]}
      >
        Layer
      </Text>
      <Text
        {...textConfig}
        position={[0.6, 1.5, 0]}
        fontSize={0.4}
        rotation={[-Math.PI / 4, 0, 0]}
      >
        2
      </Text>
      <Text
        {...textConfig}
        position={[0, 1, 1]}
        fontSize={0.4}
        rotation={[-Math.PI / 4, 0, 0]}
      >
        Private
      </Text>
      <Text
        receiveShadow
        {...textConfig}
        position={[0, 0, 1]}
        fontSize={0.4}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        Computation
      </Text>

      <Html sprite transform position={[-0.15, 2.7, 0]}>
        <div className="infoCard">
          <p>
            <a target="_blank" href="https://github.com/twilight-project">
              Twilight
            </a>
          </p>
        </div>
      </Html>
    </>
  );
}
