import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera } from '@react-three/drei'

export default function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/EREBMc0oEDx5mLYb/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#000000']} />
      <group {...props} dispose={null}>
        <group name="Altar" position={[-51.36, 1204.24, -1158.16]}>
          <group name="plants" position={[-144.43, -488.16, -16.47]}>
            <mesh
              name="Cube 74"
              geometry={nodes['Cube 74'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-660.7, -36.02, -642.74]}
              rotation={[-1.26, 0.26, -0.85]}
              scale={[0.11, 0.05, 0]}
            />
            <mesh
              name="Cube 73"
              geometry={nodes['Cube 73'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-651.52, -40.21, -622.66]}
              rotation={[-1.44, 0.11, 1.09]}
              scale={[0.11, 0.05, 0.01]}
            />
            <mesh
              name="Cube 72"
              geometry={nodes['Cube 72'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-639.3, -39.54, -641.64]}
              rotation={[-1.21, -0.18, -2.56]}
              scale={[0.1, 0.05, 0.01]}
            />
            <mesh
              name="Cube 741"
              geometry={nodes['Cube 741'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-859.82, -33.84, -918.06]}
              rotation={[-1.12, 0.21, -1.34]}
              scale={[0.14, 0.07, 0.01]}
            />
            <mesh
              name="Cube 731"
              geometry={nodes['Cube 731'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-864.33, -38.13, -888.24]}
              rotation={[-1.65, 0.33, 0.92]}
              scale={[0.14, 0.07, 0.01]}
            />
            <mesh
              name="Cube 721"
              geometry={nodes['Cube 721'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-837.14, -41.86, -902.16]}
              rotation={[-1.32, -0.08, -3.14]}
              scale={[0.14, 0.07, 0.01]}
            />
            <mesh
              name="Cube 742"
              geometry={nodes['Cube 742'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[733.24, 48.34, -968.06]}
              rotation={[-1.53, 0.27, 1.08]}
              scale={[0.12, 0.06, 0]}
            />
            <mesh
              name="Cube 732"
              geometry={nodes['Cube 732'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[752.54, 48.55, -976.37]}
              rotation={[-1.24, -0.25, 2.77]}
              scale={[0.12, 0.06, 0.01]}
            />
            <mesh
              name="Cube 75"
              geometry={nodes['Cube 75'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[731.56, 52.07, -997.71]}
              rotation={[-1.23, 0.1, -1.15]}
              scale={[0.12, 0.06, 0]}
            />
            <mesh
              name="Cube 743"
              geometry={nodes['Cube 743'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[749.41, 49.3, -995.31]}
              rotation={[-1.23, 0.1, -2.28]}
              scale={[0.12, 0.06, 0]}
            />
            <mesh
              name="Cube 722"
              geometry={nodes['Cube 722'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[723.48, 50.36, -982.25]}
              rotation={[-1.2, 0.28, -0.05]}
              scale={[0.11, 0.06, 0.01]}
            />
            <mesh
              name="Cube 744"
              geometry={nodes['Cube 744'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[856.82, -32.39, -666.25]}
              rotation={[-1.59, -0.31, -2.79]}
              scale={[0.18, 0.08, 0.01]}
            />
            <mesh
              name="Cube 733"
              geometry={nodes['Cube 733'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[829.48, -31.66, -680.23]}
              rotation={[-1.5, 0.46, -1.63]}
              scale={[0.18, 0.09, 0.01]}
            />
            <mesh
              name="Cube 751"
              geometry={nodes['Cube 751'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[824.91, -39.35, -637.04]}
              rotation={[-1.56, 0.11, 1.05]}
              scale={[0.17, 0.08, 0.01]}
            />
            <mesh
              name="Cube 745"
              geometry={nodes['Cube 745'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[811.3, -39.68, -659.99]}
              rotation={[-1.61, 0.09, -0.02]}
              scale={[0.17, 0.09, 0.01]}
            />
            <mesh
              name="Cube 723"
              geometry={nodes['Cube 723'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[849.91, -37.21, -642.3]}
              rotation={[-1.8, -0.06, 2.24]}
              scale={[0.17, 0.08, 0.01]}
            />
            <mesh
              name="Cube 746"
              geometry={nodes['Cube 746'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[679.27, -34.66, -79.67]}
              rotation={[-1.35, 0.13, -0.82]}
              scale={[0.2, 0.1, 0.01]}
            />
            <mesh
              name="Cube 734"
              geometry={nodes['Cube 734'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[682.78, -35.39, -43.9]}
              rotation={[-1.91, 0.02, 0.76]}
              scale={[0.21, 0.1, 0.01]}
            />
            <mesh
              name="Cube 752"
              geometry={nodes['Cube 752'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[728.77, -37.94, -67.03]}
              rotation={[-1.57, -0.16, -3.01]}
              scale={[0.2, 0.1, 0.01]}
            />
            <mesh
              name="Cube 747"
              geometry={nodes['Cube 747'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[714.92, -40.4, -39.21]}
              rotation={[-1.57, -0.16, 2.14]}
              scale={[0.2, 0.1, 0.01]}
            />
            <mesh
              name="Cube 724"
              geometry={nodes['Cube 724'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[707.59, -36.56, -88.22]}
              rotation={[-1.37, -0.23, -1.84]}
              scale={[0.2, 0.1, 0.01]}
            />
            <mesh
              name="Cube 748"
              geometry={nodes['Cube 748'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-417.65, -35.73, -253.56]}
              rotation={[-1.49, 0.21, -0.2]}
              scale={[0.18, 0.08, 0.01]}
            />
            <mesh
              name="Cube 735"
              geometry={nodes['Cube 735'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-398.83, -42.02, -229.91]}
              rotation={[-1.54, -0.02, 1.37]}
              scale={[0.17, 0.09, 0.01]}
            />
            <mesh
              name="Cube 753"
              geometry={nodes['Cube 753'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-374.8, -38.35, -268.86]}
              rotation={[-1.55, -0.19, -2.52]}
              scale={[0.17, 0.08, 0.01]}
            />
            <mesh
              name="Cube 749"
              geometry={nodes['Cube 749'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-371.09, -39.01, -241.88]}
              rotation={[-1.51, -0.17, 2.73]}
              scale={[0.19, 0.08, 0.01]}
            />
            <mesh
              name="Cube 725"
              geometry={nodes['Cube 725'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-401.66, -37.67, -278.76]}
              rotation={[-1.35, -0.08, -1.35]}
              scale={[0.21, 0.09, 0.01]}
            />
            <mesh
              name="Cube 7410"
              geometry={nodes['Cube 7410'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-656.32, -40.96, 886.35]}
              rotation={[-1.38, 0.08, -0.17]}
              scale={[0.37, 0.2, 0.02]}
            />
            <mesh
              name="Cube 736"
              geometry={nodes['Cube 736'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-622.39, -32.92, 948.07]}
              rotation={[-1.77, 0.09, 1.31]}
              scale={[0.42, 0.2, 0.02]}
            />
            <mesh
              name="Cube 754"
              geometry={nodes['Cube 754'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-562.56, -38.87, 871.5]}
              rotation={[-1.44, -0.02, -2.62]}
              scale={[0.37, 0.21, 0.02]}
            />
            <mesh
              name="Cube 7411"
              geometry={nodes['Cube 7411'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-566.17, -50.96, 934.28]}
              rotation={[-1.44, -0.05, 2.54]}
              scale={[0.4, 0.19, 0.02]}
            />
            <mesh
              name="Cube 726"
              geometry={nodes['Cube 726'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-613.54, -26.24, 844.91]}
              rotation={[-1.12, -0.01, -1.49]}
              scale={[0.41, 0.18, 0.02]}
            />
            <mesh
              name="Cube 7412"
              geometry={nodes['Cube 7412'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[569.6, -45.54, 819.64]}
              rotation={[-1.39, 0.2, 1.12]}
              scale={[0.37, 0.2, 0.02]}
            />
            <mesh
              name="Cube 737"
              geometry={nodes['Cube 737'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[636.53, -32.27, 800.32]}
              rotation={[-1.34, -0.18, 2.68]}
              scale={[0.42, 0.2, 0.02]}
            />
            <mesh
              name="Cube 755"
              geometry={nodes['Cube 755'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[574.06, -32.58, 725.66]}
              rotation={[-1.4, 0.15, -1.35]}
              scale={[0.37, 0.21, 0.02]}
            />
            <mesh
              name="Cube 7413"
              geometry={nodes['Cube 7413'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[635.24, -43.76, 740.83]}
              rotation={[-1.33, 0.08, -2.4]}
              scale={[0.4, 0.19, 0.02]}
            />
            <mesh
              name="Cube 727"
              geometry={nodes['Cube 727'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[537.15, -26.64, 771.1]}
              rotation={[-1.34, 0.33, -0.24]}
              scale={[0.41, 0.18, 0.02]}
            />
            <mesh
              name="Cube 7414"
              geometry={nodes['Cube 7414'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-767.11, -34.03, -672.91]}
              rotation={[-1.35, 0.13, -0.82]}
              scale={[0.2, 0.1, 0.01]}
            />
            <mesh
              name="Cube 738"
              geometry={nodes['Cube 738'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-763.6, -34.75, -637.14]}
              rotation={[-1.91, 0.02, 0.76]}
              scale={[0.21, 0.1, 0.01]}
            />
            <mesh
              name="Cube 756"
              geometry={nodes['Cube 756'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-717.61, -37.31, -660.28]}
              rotation={[-1.57, -0.16, -3.01]}
              scale={[0.2, 0.1, 0.01]}
            />
            <mesh
              name="Cube 7415"
              geometry={nodes['Cube 7415'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-731.46, -39.77, -632.46]}
              rotation={[-1.57, -0.16, 2.14]}
              scale={[0.2, 0.1, 0.01]}
            />
            <mesh
              name="Cube 728"
              geometry={nodes['Cube 728'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[-738.78, -35.93, -681.47]}
              rotation={[-1.37, -0.23, -1.84]}
              scale={[0.2, 0.1, 0.01]}
            />
            <mesh
              name="Cube 7416"
              geometry={nodes['Cube 7416'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[682.71, 52.68, -858.54]}
              rotation={[-1.45, -0.26, -2.85]}
              scale={[0.1, 0.05, 0]}
            />
            <mesh
              name="Cube 739"
              geometry={nodes['Cube 739'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[661.52, 53.78, -861.69]}
              rotation={[-1.24, 0.3, -0.75]}
              scale={[0.09, 0.05, 0]}
            />
            <mesh
              name="Cube 729"
              geometry={nodes['Cube 729'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[668.78, 50.33, -842.59]}
              rotation={[-1.71, -0.08, 1.45]}
              scale={[0.1, 0.05, 0]}
            />
            <mesh
              name="Cube 7417"
              geometry={nodes['Cube 7417'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[527.16, -36.69, -253.42]}
              rotation={[-1.58, -0.25, 2.89]}
              scale={[0.19, 0.1, 0.01]}
            />
            <mesh
              name="Cube 7310"
              geometry={nodes['Cube 7310'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[500.19, -29.03, -286.16]}
              rotation={[-1.12, 0.19, -1.4]}
              scale={[0.21, 0.09, 0.01]}
            />
            <mesh
              name="Cube 7210"
              geometry={nodes['Cube 7210'].geometry}
              material={materials.plants}
              castShadow
              receiveShadow
              position={[490.65, -39.72, -242.61]}
              rotation={[-1.73, 0.16, 0.92]}
              scale={[0.2, 0.09, 0.01]}
            />
          </group>
          <group name="grass" position={[5.13, -372, -167.8]}>
            <mesh
              name="Rectangle 69"
              geometry={nodes['Rectangle 69'].geometry}
              material={materials.grass}
              castShadow
              receiveShadow
              position={[654.94, -107.97, 158.34]}
              rotation={[-1.51, 0.01, -0.78]}
              scale={[0.65, 0.81, 1]}
            />
            <mesh
              name="Rectangle 72"
              geometry={nodes['Rectangle 72'].geometry}
              material={materials.grass}
              castShadow
              receiveShadow
              position={[-1088.17, 117.93, -453.04]}
              rotation={[-1.51, 0, -1.55]}
              scale={[0.86, 0.73, 1.34]}
            />
            <mesh
              name="Rectangle 71"
              geometry={nodes['Rectangle 71'].geometry}
              material={materials.grass}
              castShadow
              receiveShadow
              position={[-1064.82, -12.36, -904.05]}
              rotation={[-1.57, 0, 0.06]}
              scale={[0.74, 0.65, 1.34]}
            />
            <mesh
              name="Rectangle 66"
              geometry={nodes['Rectangle 66'].geometry}
              material={materials.grass}
              castShadow
              receiveShadow
              position={[1000.84, 106.12, -902.62]}
              rotation={[-Math.PI / 2, 0.08, 0.06]}
              scale={[1, 0.67, 1.34]}
            />
            <mesh
              name="Rectangle 75"
              geometry={nodes['Rectangle 75'].geometry}
              material={materials.grass}
              castShadow
              receiveShadow
              position={[537.79, -73.94, -723.28]}
              rotation={[-1.57, 0.01, -0.97]}
              scale={[-0.8, 0.86, 1.56]}
            />
            <mesh
              name="Rectangle 74"
              geometry={nodes['Rectangle 74'].geometry}
              material={materials.grass}
              castShadow
              receiveShadow
              position={[352.38, -81.24, -360.17]}
              rotation={[-1.57, 0.01, -0.97]}
              scale={[-0.8, 0.86, 1.56]}
            />
            <mesh
              name="Rectangle 77"
              geometry={nodes['Rectangle 77'].geometry}
              material={materials.grass}
              castShadow
              receiveShadow
              position={[-557.41, -171.67, -18.87]}
              rotation={[-1.57, 0, -0.13]}
              scale={[-1.5, 1.06, 1.56]}
            />
            <mesh
              name="Rectangle 76"
              geometry={nodes['Rectangle 76'].geometry}
              material={materials.grass}
              castShadow
              receiveShadow
              position={[-8.08, -172.07, 755.83]}
              rotation={[-1.57, 0, -0.13]}
              scale={[-1.5, 1.06, 1.56]}
            />
            <mesh
              name="Rectangle 73"
              geometry={nodes['Rectangle 73'].geometry}
              material={materials.grass}
              castShadow
              receiveShadow
              position={[-886.01, -171.03, -579.28]}
              rotation={[-1.57, 0.01, -0.13]}
              scale={[-1.27, 1.06, 1.56]}
            />
            <mesh
              name="Rectangle 70"
              geometry={nodes['Rectangle 70'].geometry}
              material={materials.grass}
              castShadow
              receiveShadow
              position={[-421.77, -69.36, 344.69]}
              rotation={[-1.55, 0.01, -0.13]}
              scale={[-1.27, 1.06, 1.56]}
            />
            <mesh
              name="Rectangle 67"
              geometry={nodes['Rectangle 67'].geometry}
              material={materials.grass}
              castShadow
              receiveShadow
              position={[-737.94, 112.22, -973.19]}
              rotation={[-Math.PI / 2, -0.14, 0]}
              scale={[-1.7, 1.06, 1.43]}
            />
            <mesh
              name="Rectangle 65"
              geometry={nodes['Rectangle 65'].geometry}
              material={materials.grass}
              castShadow
              receiveShadow
              position={[630.46, 129.15, -976.11]}
              rotation={[-Math.PI / 2, 0.18, 0]}
              scale={[1.7, 1.06, 1.54]}
            />
            <mesh
              name="Rectangle 64"
              geometry={nodes['Rectangle 64'].geometry}
              material={materials.grass}
              castShadow
              receiveShadow
              position={[-44.73, -173.2, -77.61]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[4.86, 9.67, 2.8]}
            />
          </group>
          <group name="tiles" position={[4.57, -484.98, 163.22]}>
            <mesh
              name="Rectangle 60"
              geometry={nodes['Rectangle 60'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[211.05, 33.94, -741.62]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={[-1, 1.98, 1]}
            />
            <mesh
              name="Rectangle 63"
              geometry={nodes['Rectangle 63'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-25.11, 33.94, -1256.79]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[-1, 1.98, 1]}
            />
            <mesh
              name="Rectangle 62"
              geometry={nodes['Rectangle 62'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-25.11, 33.94, -655.58]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1, 1.98, 1]}
            />
            <mesh
              name="Rectangle 59"
              geometry={nodes['Rectangle 59'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-310.9, 33.94, -741.62]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1, 1.98, 1]}
            />
            <mesh
              name="Rectangle 61"
              geometry={nodes['Rectangle 61'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[278.37, 33.94, -1028.87]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={[-1, 1.98, 1]}
            />
            <mesh
              name="Rectangle 58"
              geometry={nodes['Rectangle 58'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-379.32, 33.94, -1028.87]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1, 1.98, 1]}
            />
            <mesh
              name="Rectangle 8"
              geometry={nodes['Rectangle 8'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[166.09, 37.01, -534.87]}
              rotation={[-Math.PI / 2, 0, 1.2]}
              scale={1.67}
            />
            <mesh
              name="Rectangle 7"
              geometry={nodes['Rectangle 7'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-286.73, 37.01, -547.61]}
              rotation={[-Math.PI / 2, 0, 0.48]}
              scale={1.67}
            />
            <mesh
              name="Rectangle 6"
              geometry={nodes['Rectangle 6'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-442.73, 37.01, -602.61]}
              rotation={[-Math.PI / 2, 0, 0.48]}
              scale={1.67}
            />
            <mesh
              name="Rectangle 3"
              geometry={nodes['Rectangle 3'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-627.58, 37.01, -892.21]}
              rotation={[-Math.PI / 2, 0, 0.48]}
              scale={1.67}
            />
            <mesh
              name="Rectangle 4"
              geometry={nodes['Rectangle 4'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-605.72, 37.01, -866.11]}
              rotation={[-Math.PI / 2, 0, -3.05]}
              scale={[-1.67, 1.67, 1.67]}
            />
            <mesh
              name="Rectangle 5"
              geometry={nodes['Rectangle 5'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-606.96, 37.01, -723.26]}
              rotation={[-Math.PI / 2, 0, -3.05]}
              scale={[-1.67, 1.67, 1.67]}
            />
            <mesh
              name="Rectangle 9"
              geometry={nodes['Rectangle 9'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[521.69, 37.01, -1092.9]}
              rotation={[-Math.PI / 2, 0, -3.05]}
              scale={[-1.67, 1.67, 1.67]}
            />
            <mesh
              name="Rectangle 2"
              geometry={nodes['Rectangle 2'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-632.35, 37.01, -1011.65]}
              rotation={[-Math.PI / 2, 0, -3.05]}
              scale={[-1.67, 1.67, 1.67]}
            />
            <mesh
              name="Rectangle 17"
              geometry={nodes['Rectangle 17'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-585.72, -53.78, -98.46]}
              rotation={[-Math.PI / 2, 0, 3.12]}
              scale={[2.18, 3.01, 1.67]}
            />
            <mesh
              name="Rectangle 20"
              geometry={nodes['Rectangle 20'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[714.44, -53.78, -512.1]}
              rotation={[-Math.PI / 2, 0, -2.68]}
              scale={[1.08, 1.27, 1.67]}
            />
            <mesh
              name="Rectangle 49"
              geometry={nodes['Rectangle 49'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[812.31, -53.78, -1043.71]}
              rotation={[-Math.PI / 2, 0, -2.14]}
              scale={[0.21, 0.14, 1.67]}
            />
            <mesh
              name="Rectangle 23"
              geometry={nodes['Rectangle 23'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[851.64, -53.78, -611.04]}
              rotation={[-Math.PI / 2, 0, -2.14]}
              scale={[0.45, 0.43, 1.67]}
            />
            <mesh
              name="Rectangle 22"
              geometry={nodes['Rectangle 22'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[858.86, -53.78, -416.1]}
              rotation={[-Math.PI / 2, 0, -2.14]}
              scale={[0.45, 0.43, 1.67]}
            />
            <mesh
              name="Rectangle 21"
              geometry={nodes['Rectangle 21'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[674.1, -53.78, -175.76]}
              rotation={[-Math.PI / 2, 0, -2.63]}
              scale={[0.84, 0.99, 1.67]}
            />
            <mesh
              name="Rectangle 56"
              geometry={nodes['Rectangle 56'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[129.59, -53.78, 529.69]}
              rotation={[-Math.PI / 2, 0, -0.07]}
              scale={[0.39, 0.82, 1.67]}
            />
            <mesh
              name="Rectangle 79"
              geometry={nodes['Rectangle 79'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-86.23, -53.78, 1163.93]}
              rotation={[-Math.PI / 2, 0, -3.08]}
              scale={[1.24, 1.81, 1.67]}
            />
            <mesh
              name="Rectangle 57"
              geometry={nodes['Rectangle 57'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-13.59, -53.78, 925.46]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1.31, 1.72, 1.67]}
            />
            <mesh
              name="Rectangle 55"
              geometry={nodes['Rectangle 55'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-116.91, -53.78, 526.75]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1.31, 1.72, 1.67]}
            />
            <mesh
              name="Rectangle 54"
              geometry={nodes['Rectangle 54'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-161.97, -53.78, 537.94]}
              rotation={[-Math.PI / 2, 0, -3.14]}
              scale={[1.31, 1.72, 1.67]}
            />
            <mesh
              name="Rectangle 53"
              geometry={nodes['Rectangle 53'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[134.47, -53.78, 502.86]}
              rotation={[-Math.PI / 2, 0, 3.12]}
              scale={[1.31, 1.72, 1.67]}
            />
            <mesh
              name="Rectangle 19"
              geometry={nodes['Rectangle 19'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[448.46, -53.78, -223.11]}
              rotation={[-Math.PI / 2, 0, 3.12]}
              scale={[1.31, 1.72, 1.67]}
            />
            <mesh
              name="Rectangle 25"
              geometry={nodes['Rectangle 25'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-796.45, -53.78, -15.88]}
              rotation={[-Math.PI / 2, 0, 3.12]}
              scale={[1.31, 1.72, 1.67]}
            />
            <mesh
              name="Rectangle 24"
              geometry={nodes['Rectangle 24'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-725.18, -53.78, -87.14]}
              rotation={[-Math.PI / 2, 0, 3.12]}
              scale={[1.31, 1.72, 1.67]}
            />
            <mesh
              name="Rectangle 27"
              geometry={nodes['Rectangle 27'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[449.58, -53.78, -261.42]}
              rotation={[-Math.PI / 2, 0, 2.91]}
              scale={[0.21, 0.29, 1.67]}
            />
            <mesh
              name="Rectangle 28"
              geometry={nodes['Rectangle 28'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-420.05, -53.78, -53.26]}
              rotation={[-Math.PI / 2, 0, 3.03]}
              scale={[-0.58, 0.78, 1.67]}
            />
            <mesh
              name="Rectangle 26"
              geometry={nodes['Rectangle 26'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-46.34, -53.78, -13.11]}
              rotation={[-Math.PI / 2, 0, 2.91]}
              scale={[0.58, 0.78, 1.67]}
            />
            <mesh
              name="Rectangle 18"
              geometry={nodes['Rectangle 18'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-160.18, -53.78, 67.94]}
              rotation={[-Math.PI / 2, 0, 3.12]}
              scale={[1.31, 1.72, 1.67]}
            />
            <mesh
              name="Rectangle 16"
              geometry={nodes['Rectangle 16'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-883.72, -53.78, -516.46]}
              rotation={[-Math.PI / 2, 0, 3.12]}
              scale={[2.18, 3.01, 1.67]}
            />
            <mesh
              name="Rectangle 15"
              geometry={nodes['Rectangle 15'].geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-912.83, -53.78, -1148.55]}
              rotation={[-Math.PI / 2, 0, 0.06]}
              scale={[2.18, 3.01, 1.67]}
            />
            <mesh
              name="Rectangle"
              geometry={nodes.Rectangle.geometry}
              material={materials.tiles}
              castShadow
              receiveShadow
              position={[-642.6, 37.01, -1165.13]}
              rotation={[-Math.PI / 2, 0, 0.06]}
              scale={1.67}
            />
          </group>
          <group name="bricks" position={[-45.75, -32.99, -70.45]}>
            <mesh
              name="Cube 46"
              geometry={nodes['Cube 46'].geometry}
              material={materials['Cube 46 Material']}
              castShadow
              receiveShadow
              position={[2.2, 651.21, -1072.68]}
              scale={[0.69, 0.13, 0.61]}
            />
            <mesh
              name="Rectangle 33"
              geometry={nodes['Rectangle 33'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[897.26, -499.79, -348.66]}
              rotation={[-1.56, 0, -0.31]}
              scale={[0.22, 0.96, 0.8]}
            />
            <mesh
              name="Rectangle 35"
              geometry={nodes['Rectangle 35'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[1002.14, -467.94, -522.56]}
              rotation={[-1.09, -0.12, -0.18]}
              scale={[0.87, 0.93, 0.66]}
            />
            <mesh
              name="Rectangle 32"
              geometry={nodes['Rectangle 32'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[987.3, -491.45, -383.11]}
              rotation={[-Math.PI / 2, 0, -0.45]}
              scale={[1, 0.49, 0.63]}
            />
            <mesh
              name="Rectangle 31"
              geometry={nodes['Rectangle 31'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[960.96, -494.41, -312.19]}
              rotation={[-1.51, -0.02, -0.31]}
              scale={[1, 0.49, 0.38]}
            />
            <mesh
              name="Rectangle 34"
              geometry={nodes['Rectangle 34'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[1004.67, -534.09, -480.18]}
              rotation={[-1.68, 0.04, -0.29]}
              scale={[1, 1.06, 0.82]}
            />
            <mesh
              name="Rectangle 40"
              geometry={nodes['Rectangle 40'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[1003.86, -501.09, -937.39]}
              rotation={[-1.21, 0.39, -0.17]}
              scale={[0.87, 0.91, 0.95]}
            />
            <mesh
              name="Rectangle 48"
              geometry={nodes['Rectangle 48'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-718.05, -511.2, -1065.81]}
              rotation={[-1.56, -0.04, -0.04]}
              scale={[1.84, 2.38, 0.89]}
            />
            <mesh
              name="Rectangle 45"
              geometry={nodes['Rectangle 45'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[567.86, -417.93, -1033.23]}
              rotation={[-1.56, -0.1, -0.04]}
              scale={[1.84, 0.91, 0.89]}
            />
            <mesh
              name="Rectangle 47"
              geometry={nodes['Rectangle 47'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[697.05, -523.6, -1118.68]}
              rotation={[-1.54, 0.11, -0.09]}
              scale={[1.5, 0.65, 1.89]}
            />
            <mesh
              name="Rectangle 44"
              geometry={nodes['Rectangle 44'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[692.55, -514.19, -1012.98]}
              rotation={[-1.55, 0.05, -0.09]}
              scale={[1.5, 0.91, 0.95]}
            />
            <mesh
              name="Rectangle 46"
              geometry={nodes['Rectangle 46'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[764.36, -351.08, -1021.88]}
              rotation={[-1.55, 0.02, -0.09]}
              scale={[0.34, 0.91, 0.98]}
            />
            <mesh
              name="Rectangle 42"
              geometry={nodes['Rectangle 42'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[1025.7, -599.4, -1009.81]}
              rotation={[-1.55, 0.04, -0.04]}
              scale={[0.98, 0.82, 1.25]}
            />
            <mesh
              name="Rectangle 37"
              geometry={nodes['Rectangle 37'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[1030.21, -560.89, -933.06]}
              rotation={[-1.55, 0.09, -0.04]}
              scale={[0.78, 0.66, 1]}
            />
            <mesh
              name="Rectangle 36"
              geometry={nodes['Rectangle 36'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[1013.33, -545.87, -761.74]}
              rotation={[-1.54, 0.35, 0.02]}
              scale={[0.78, 1.2, 1]}
            />
            <mesh
              name="Rectangle 41"
              geometry={nodes['Rectangle 41'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[774.6, -599.86, 82.75]}
              rotation={[-Math.PI / 2, 0, -0.82]}
              scale={[1, 1, 1.24]}
            />
            <mesh
              name="Rectangle 52"
              geometry={nodes['Rectangle 52'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[446.81, -576.17, 245.57]}
              rotation={[-1.61, -0.07, 0.16]}
              scale={[0.66, 0.51, 1.89]}
            />
            <mesh
              name="Rectangle 51"
              geometry={nodes['Rectangle 51'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[413.12, -530.13, 236.71]}
              rotation={[-1.61, -0.07, 0.16]}
              scale={[0.6, 1, 1.78]}
            />
            <mesh
              name="Rectangle 50"
              geometry={nodes['Rectangle 50'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[286.52, -535.96, 287.95]}
              rotation={[-1.61, -0.09, 0.16]}
              scale={[0.81, 1, 1.08]}
            />
            <mesh
              name="Rectangle 30"
              geometry={nodes['Rectangle 30'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[810.26, -524.27, -40.55]}
              rotation={[-1.52, -0.11, -2.42]}
              scale={[0.41, 0.32, 0.44]}
            />
            <mesh
              name="Cube 60"
              geometry={nodes['Cube 60'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[669.98, -234.02, -1070.89]}
              rotation={[-0.02, -0.09, -0.18]}
              scale={[5.37, 1.14, 3.3]}
            />
            <mesh
              name="Cube 58"
              geometry={nodes['Cube 58'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-3.72, 561.73, -999.08]}
              rotation={[0, 0, -Math.PI]}
              scale={[1.71, 0.25, 0.26]}
            />
            <mesh
              name="Cube 57"
              geometry={nodes['Cube 57'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[7.96, 568.21, -999.01]}
              scale={[1.71, 0.25, 0.26]}
            />
            <mesh
              name="Rectangle 10"
              geometry={nodes['Rectangle 10'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[662.52, -472.6, 555.41]}
              rotation={[Math.PI / 2, 0, -Math.PI / 2]}
              scale={[4.45, 4.39, 10.04]}
            />
            <mesh
              name="Cube 50"
              geometry={nodes['Cube 50'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[662.5, -423.65, 554.61]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.7, 0.41, 0.7]}
            />
            <mesh
              name="Sphere"
              geometry={nodes.Sphere.geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[340.85, -370.67, 1126.53]}
              rotation={[0, Math.PI / 2, 0]}
              scale={0.64}
            />
            <mesh
              name="Cube 48"
              geometry={nodes['Cube 48'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[340.83, -419.72, 1125.99]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1.41, 1.12, 1.49]}
            />
            <mesh
              name="Cube 47"
              geometry={nodes['Cube 47'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[340.92, -463.81, 1126.23]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[0.78, 0.55, 0.89]}
            />
            <mesh
              name="Cube 53"
              geometry={nodes['Cube 53'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[340.5, 87.16, 613]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.32, 1, 0.32]}
            />
            <mesh
              name="Cube 52"
              geometry={nodes['Cube 52'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[395.49, 87.16, 558.01]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.32, 1, 0.32]}
            />
            <mesh
              name="Cube 531"
              geometry={nodes['Cube 531'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[340.5, 87.16, 503.02]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.32, 1, 0.32]}
            />
            <mesh
              name="Cube 51"
              geometry={nodes['Cube 51'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[285.5, 87.16, 558.01]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.32, 1, 0.32]}
            />
            <mesh
              name="Cube 471"
              geometry={nodes['Cube 471'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[342.37, -380.51, 558.13]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.32, 1.58, 0.22]}
            />
            <mesh
              name="Cube 43"
              geometry={nodes['Cube 43'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-1037.26, -309.12, -557.77]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[1.06, 1.23, 0.19]}
            />
            <mesh
              name="Cube 501"
              geometry={nodes['Cube 501'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[332.82, -328.61, 249.93]}
              rotation={[-Math.PI / 2, 0, -2.98]}
              scale={[1.2, 1.23, 1.16]}
            />
            <mesh
              name="Cube 40"
              geometry={nodes['Cube 40'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-352.09, -420.64, 245.52]}
              rotation={[-Math.PI / 2, 0, 1.45]}
              scale={[1.14, 1.23, 1]}
            />
            <mesh
              name="Cube 23"
              geometry={nodes['Cube 23'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-1013.84, -494.59, -429.15]}
              rotation={[-1.17, 0.07, 0.12]}
              scale={[0.57, 0.82, 0.67]}
            />
            <mesh
              name="Cube 22"
              geometry={nodes['Cube 22'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-1001.14, -501.29, -338.84]}
              rotation={[-Math.PI / 2, 0, 0.2]}
              scale={[0.41, 0.74, 0.77]}
            />
            <mesh
              name="Cube 71"
              geometry={nodes['Cube 71'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-944.14, -507.79, -231.07]}
              rotation={[-1.52, -0.09, 0.5]}
              scale={[1.79, 1.16, 1]}
            />
            <mesh
              name="Cube 16"
              geometry={nodes['Cube 16'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[1014.51, -356.69, -623.88]}
              rotation={[-1.58, 0.03, -0.1]}
              scale={[0.96, 0.96, 0.71]}
            />
            <mesh
              name="Cube 12"
              geometry={nodes['Cube 12'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[1044.39, -245.37, -1001.1]}
              rotation={[-1.57, 0.08, 0]}
              scale={[0.97, 0.7, 1]}
            />
            <mesh
              name="Cube 44"
              geometry={nodes['Cube 44'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-1018.6, -452.37, -949.3]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.75, 0.83, 1.42]}
            />
            <mesh
              name="Cube 62"
              geometry={nodes['Cube 62'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-1014.08, -437.75, -1029.21]}
              rotation={[-1.41, 0, 0]}
              scale={[0.86, 0.61, 0.72]}
            />
            <mesh
              name="Cube 66"
              geometry={nodes['Cube 66'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-1030.04, -521.31, -847.75]}
              rotation={[-2.02, 0.06, 0.19]}
              scale={[0.12, 0.83, 1.77]}
            />
            <mesh
              name="Cube 65"
              geometry={nodes['Cube 65'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-1036.97, -507.68, -696.92]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.08, 0.97, 0.72]}
            />
            <mesh
              name="Cube 69"
              geometry={nodes['Cube 69'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-989.37, -449.88, -612.43]}
              rotation={[-1.68, 0, 0]}
              scale={[0.12, 0.46, 0.72]}
            />
            <mesh
              name="Cube 70"
              geometry={nodes['Cube 70'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-1086.63, -442.64, -499.09]}
              rotation={[-Math.PI / 2, 0.05, 0]}
              scale={[0.12, 0.46, 0.72]}
            />
            <mesh
              name="Cube 67"
              geometry={nodes['Cube 67'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-1034.38, -492.24, -557.7]}
              rotation={[-Math.PI / 2, 0, -0.02]}
              scale={[0.28, 1.2, 0.72]}
            />
            <mesh
              name="Cube 63"
              geometry={nodes['Cube 63'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-1019.24, -364.16, -903.67]}
              rotation={[-Math.PI / 2, 0.08, 0]}
              scale={[0.24, 0.37, 0.72]}
            />
            <mesh
              name="Cube 61"
              geometry={nodes['Cube 61'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-985.08, -512.82, -1020.06]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.86, 0.75, 0.72]}
            />
            <mesh
              name="Cube 39"
              geometry={nodes['Cube 39'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[-668.29, -243.14, -1072.74]}
              rotation={[-0.01, 0.02, -3.02]}
              scale={[0.75, 0.07, 0.92]}
            />
          </group>
          <group name="stones" position={[-54.59, 98.11, 14.1]}>
            <mesh
              name="Rectangle 301"
              geometry={nodes['Rectangle 301'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[1003.8, -667.37, -429.77]}
              rotation={[-Math.PI / 2, 0, -0.37]}
              scale={[1, 1, 0.67]}
            />
            <mesh
              name="Rectangle 39"
              geometry={nodes['Rectangle 39'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[1016.34, -629.06, -820.36]}
              rotation={[-1.55, -0.02, -0.04]}
              scale={[0.87, 0.91, 0.95]}
            />
            <mesh
              name="Rectangle 38"
              geometry={nodes['Rectangle 38'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[1028.56, -662.07, -970.06]}
              rotation={[-1.55, 0.09, -0.04]}
              scale={[0.87, 0.91, 1]}
            />
            <mesh
              name="Rectangle 29"
              geometry={nodes['Rectangle 29'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[946.1, -648.67, -292.67]}
              rotation={[-Math.PI / 2, 0, -0.29]}
              scale={[1, 1, 1.24]}
            />
            <mesh
              name="Rectangle 311"
              geometry={nodes['Rectangle 311'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[959.74, -650.2, -455.74]}
              rotation={[-1.31, 0.13, -1.61]}
              scale={[-0.54, 0.41, 0.68]}
            />
            <mesh
              name="Rectangle 291"
              geometry={nodes['Rectangle 291'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[869.88, -645.62, -172.02]}
              rotation={[-1.52, -0.02, -2.43]}
              scale={[0.41, 0.32, 0.44]}
            />
            <mesh
              name="Rectangle 14"
              geometry={nodes['Rectangle 14'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[-351.02, -688.19, 296.92]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={[0.93, 1, 1.52]}
            />
            <mesh
              name="Rectangle 13"
              geometry={nodes['Rectangle 13'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[349.42, -688.83, 296.92]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={[0.93, 1, 1.52]}
            />
            <mesh
              name="Rectangle 141"
              geometry={nodes['Rectangle 141'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[-351.02, -693.47, 547.96]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.93, 1, 1.52]}
            />
            <mesh
              name="Rectangle 12"
              geometry={nodes['Rectangle 12'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[349.42, -688.83, 547.96]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.93, 1, 1.52]}
            />
            <mesh
              name="Rectangle 142"
              geometry={nodes['Rectangle 142'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[-351.02, -689.41, 814.57]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.93, 1, 1.52]}
            />
            <mesh
              name="Rectangle 11"
              geometry={nodes['Rectangle 11'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[349.42, -693.47, 814.08]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.93, 1, 1.52]}
            />
            <mesh
              name="Rectangle 143"
              geometry={nodes['Rectangle 143'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[-351.02, -689.41, 1105.76]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.93, 1, 1.52]}
            />
            <mesh
              name="Rectangle 101"
              geometry={nodes['Rectangle 101'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[349.42, -688.19, 1079.66]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.93, 1, 1.52]}
            />
            <mesh
              name="Cube 472"
              geometry={nodes['Cube 472'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[444.29, 20.78, -1159.3]}
              scale={[0.98, 1, 1.2]}
            />
            <mesh
              name="Cube 473"
              geometry={nodes['Cube 473'].geometry}
              material={materials.stone_detail}
              castShadow
              receiveShadow
              position={[130.93, 431.78, -1156.55]}
              rotation={[0, 0, -0.04]}
              scale={[-1.4, 0.98, 0.32]}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[7.27, -556.91, -807.87]}
              rotation={[0, 0, -Math.PI]}
              scale={[4.61, 0.44, 4.61]}
            />
            <mesh
              name="Cube 49"
              geometry={nodes['Cube 49'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[349.61, -226.76, 473.74]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={[0.46, 0.51, 0.35]}
            />
            <mesh
              name="Cube 45"
              geometry={nodes['Cube 45'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[11.05, 434.04, -1157.23]}
              scale={[0.94, 0.88, 0.88]}
            />
            <mesh
              name="Torus 3"
              geometry={nodes['Torus 3'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[9.11, 184.87, -1157.63]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[1.69, 1.67, 1.65]}
            />
            <mesh
              name="Cube 9"
              geometry={nodes['Cube 9'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[-1028.42, -441.31, -642.31]}
              rotation={[-1.51, 0, 0]}
              scale={[0.78, 0.9, 1.72]}
            />
            <mesh
              name="Cube 26"
              geometry={nodes['Cube 26'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[341.02, -565.03, 159.71]}
              rotation={[-Math.PI / 2, 0, 1.72]}
              scale={[1.02, 1.1, 2.15]}
            />
            <mesh
              name="Cube 11"
              geometry={nodes['Cube 11'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[-343.25, -616.2, 160.97]}
              rotation={[-Math.PI / 2, 0, 1.45]}
              scale={[1.02, 1.1, 2.64]}
            />
            <mesh
              name="Cube 10"
              geometry={nodes['Cube 10'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[-934.91, -615.58, -320.87]}
              rotation={[-1.58, 0.03, 0.42]}
              scale={[0.6, 1.1, 1]}
            />
            <mesh
              name="Cube 8"
              geometry={nodes['Cube 8'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[-1028.42, -546.7, -642.31]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.96, 1.12, 2.14]}
            />
            <mesh
              name="Cube 14"
              geometry={nodes['Cube 14'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[1030.92, -622.58, -914]}
              rotation={[-Math.PI / 2, 0, -0.04]}
              scale={[0.46, 1.67, 1.75]}
            />
            <mesh
              name="Cube 13"
              geometry={nodes['Cube 13'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[1042.14, -509.2, -1085.64]}
              rotation={[-1.57, 0.08, 0]}
              scale={[0.68, 0.49, 9.69]}
            />
            <mesh
              name="Cube 19"
              geometry={nodes['Cube 19'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[721.97, -610.84, -26.55]}
              rotation={[-1.55, -0.01, -0.84]}
              scale={[0.61, 0.92, 2.2]}
            />
            <mesh
              name="Cube 511"
              geometry={nodes['Cube 511'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[504.36, -614.85, 131.12]}
              rotation={[-1.55, -0.01, -1]}
              scale={[0.36, 1.15, 2.85]}
            />
            <mesh
              name="Cube 17"
              geometry={nodes['Cube 17'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[1020.53, -571.24, -708.06]}
              rotation={[-1.58, 0.03, -0.1]}
              scale={[0.9, 0.9, 4.96]}
            />
            <mesh
              name="Cube 15"
              geometry={nodes['Cube 15'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[1024.39, -457.27, -708.57]}
              rotation={[-1.58, 0.03, -0.1]}
              scale={[0.83, 0.82, 2.07]}
            />
            <mesh
              name="Cube 42"
              geometry={nodes['Cube 42'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[-1031.89, -583.39, -866.38]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.25, 1.85, 1.29]}
            />
            <mesh
              name="Cube 7"
              geometry={nodes['Cube 7'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[-1009.75, -567.84, -1070.43]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.86, 1, 1.72]}
            />
            <mesh
              name="Cube 30"
              geometry={nodes['Cube 30'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[-632.88, -552.8, -1157.89]}
              rotation={[0.01, 0.02, 0.09]}
              scale={[0.66, 0.45, 0.67]}
            />
            <mesh
              name="Cube 29"
              geometry={nodes['Cube 29'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[661.62, -537.11, -1154.34]}
              rotation={[0, -0.1, -0.12]}
              scale={[0.73, 0.45, 0.67]}
            />
            <mesh
              name="Torus 2"
              geometry={nodes['Torus 2'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[9.35, -615.05, -947.01]}
              rotation={[-Math.PI / 2, 0, Math.PI / 2]}
              scale={[1.97, 2.1, 1.89]}
            />
            <mesh
              name="Cube 5"
              geometry={nodes['Cube 5'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[9.35, -614.97, -268.66]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1.58, 9.64, 1.08]}
            />
            <mesh
              name="Cube 4"
              geometry={nodes['Cube 4'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[9.35, -643.51, -186.23]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[1.58, 9.64, 1.08]}
            />
            <mesh
              name="Cube 7418"
              geometry={nodes['Cube 7418'].geometry}
              material={materials.stone}
              castShadow
              receiveShadow
              position={[9.34, -1021.35, -825.87]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.96, 1.15, 0.85]}
            />
          </group>
          <group name="fire" position={[616.77, -351.45, 484.96]}>
            <mesh
              name="fire1"
              geometry={nodes.fire1.geometry}
              material={materials['fire1 Material']}
              castShadow
              receiveShadow
              position={[0.76, -15.6, 0.28]}
              rotation={[Math.PI, 0, 3.13]}
              scale={[0.06, 0.07, 0.07]}
            />
          </group>
          <group
            name="antorch"
            position={[294.24, -122.64, 487.68]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[0.53, 0.54, 0.53]}
          >
            <mesh
              name="Cube 481"
              geometry={nodes['Cube 481'].geometry}
              material={materials['Cube 481 Material']}
              castShadow
              receiveShadow
              position={[-0.1, 284.41, -0.38]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[9.9, 0.98, 9.98]}
            />
            <mesh
              name="Cube 474"
              geometry={nodes['Cube 474'].geometry}
              material={materials['Cube 474 Material']}
              castShadow
              receiveShadow
              position={[-0.1, 264.86, -0.38]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[11.87, 1.22, 11.68]}
            />
            <mesh
              name="Sphere1"
              geometry={nodes.Sphere1.geometry}
              material={materials['Sphere1 Material']}
              castShadow
              receiveShadow
              position={[-0.37, 439.4, -1.85]}
            />
            <group
              name="Group 4"
              position={[-0.22, 210.49, 1367.13]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[-2.1, 2.1, 2.1]}
            >
              <mesh
                name="Cube 55"
                geometry={nodes['Cube 55'].geometry}
                material={materials['Cube 55 Material']}
                castShadow
                receiveShadow
                position={[-4.14, -3.51, 0.06]}
                rotation={[-1.65, -0.81, -1.7]}
                scale={[0.42, 1.01, 0.17]}
              />
            </group>
            <group
              name="Group"
              position={[-0.22, 210.49, 58.22]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[-2.1, 2.1, 2.1]}
            >
              <mesh
                name="Cube 551"
                geometry={nodes['Cube 551'].geometry}
                material={materials['Cube 551 Material']}
                castShadow
                receiveShadow
                position={[-4.7, -4.12, 0]}
                rotation={[-1.65, -0.81, -1.7]}
                scale={[0.42, 1.1, 0.17]}
              />
            </group>
            <group
              name="Group 3"
              position={[-59.48, 206.25, -1.47]}
              rotation={[Math.PI, Math.PI / 2, 0]}
              scale={[-1.75, 2.1, 2.1]}
            >
              <mesh
                name="Cube 552"
                geometry={nodes['Cube 552'].geometry}
                material={materials['Cube 552 Material']}
                castShadow
                receiveShadow
                position={[0, -5.95, -6.54]}
                rotation={[-2.36, 0, -Math.PI]}
                scale={[0.42, 1.01, 0.17]}
              />
            </group>
            <group
              name="Group 2"
              position={[66.5, 211.24, -1.47]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1.75, 2.1, 2.1]}
            >
              <mesh
                name="Cube 553"
                geometry={nodes['Cube 553'].geometry}
                material={materials['Cube 553 Material']}
                castShadow
                receiveShadow
                position={[0, -4.12, -4.7]}
                rotation={[-2.36, 0, -Math.PI]}
                scale={[0.42, 1.04, 0.17]}
              />
            </group>
            <group
              name="Group 6"
              position={[-0.22, 210.49, 1247.87]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1.87, 1.85, 1.87]}
            >
              <mesh
                name="Cube 54"
                geometry={nodes['Cube 54'].geometry}
                material={materials['Cube 54 Material']}
                castShadow
                receiveShadow
                position={[-4.21, -3.53, 0.11]}
                rotation={[-1.64, -0.81, -1.69]}
                scale={[0.47, 1.14, 0.19]}
              />
            </group>
            <group
              name="Group 5"
              position={[-0.22, 210.49, -63.31]}
              rotation={[0, Math.PI / 2, 0]}
              scale={[1.87, 1.85, 1.87]}
            >
              <mesh
                name="Cube 541"
                geometry={nodes['Cube 541'].geometry}
                material={materials['Cube 541 Material']}
                castShadow
                receiveShadow
                position={[-5.27, -4.66, 0]}
                rotation={[-1.64, -0.81, -1.69]}
                scale={[0.47, 1.14, 0.19]}
              />
            </group>
            <mesh
              name="Cube 502"
              geometry={nodes['Cube 502'].geometry}
              material={materials.stairs}
              castShadow
              receiveShadow
              position={[1.94, -642.72, -0.77]}
              scale={[0.88, 1.32, 0.98]}
            />
            <mesh
              name="Cube 554"
              geometry={nodes['Cube 554'].geometry}
              material={materials['Cube 554 Material']}
              castShadow
              receiveShadow
              position={[0.6, -215.29, -2.32]}
              scale={[1.56, 0.51, 1.44]}
            />
            <mesh
              name="Cube 482"
              geometry={nodes['Cube 482'].geometry}
              material={materials['Cube 482 Material']}
              castShadow
              receiveShadow
              position={[0.6, -233.54, -2.32]}
              scale={[1.97, 0.64, 1.83]}
            />
          </group>
          <group name="Group 41" position={[457.75, -278.68, -1146.14]} scale={[1.08, 1, 1]}>
            <mesh
              name="Cube 475"
              geometry={nodes['Cube 475'].geometry}
              material={materials['Cube 475 Material']}
              castShadow
              receiveShadow
              position={[-11.43, -77, 0]}
              rotation={[0, 0, -Math.PI]}
              scale={[0.45, 1.33, 2.03]}
            />
            <mesh
              name="Cube 476"
              geometry={nodes['Cube 476'].geometry}
              material={materials['Cube 476 Material']}
              castShadow
              receiveShadow
              position={[11.73, 195.68, 0]}
              scale={[0.45, 1.33, 2.03]}
            />
          </group>
          <group name="Group 31" position={[321.99, -278.68, -1146.14]} scale={[-1.08, 1, 1]}>
            <mesh
              name="Cube 477"
              geometry={nodes['Cube 477'].geometry}
              material={materials['Cube 477 Material']}
              castShadow
              receiveShadow
              position={[-11.43, -77, 0]}
              rotation={[0, 0, -Math.PI]}
              scale={[0.45, 1.33, 2.03]}
            />
            <mesh
              name="Cube 478"
              geometry={nodes['Cube 478'].geometry}
              material={materials['Cube 478 Material']}
              castShadow
              receiveShadow
              position={[11.73, 195.68, 0]}
              scale={[0.45, 1.33, 2.03]}
            />
          </group>
          <group name="gems" position={[-48.45, -20.97, -798.87]}>
            <mesh
              name="Cube 56"
              geometry={nodes['Cube 56'].geometry}
              material={materials.gem}
              castShadow
              receiveShadow
              position={[438.09, -70.16, -455.95]}
              rotation={[0, 0, -Math.PI]}
              scale={[0.1, 0.1, 0.05]}
            />
            <mesh
              name="Cube 542"
              geometry={nodes['Cube 542'].geometry}
              material={materials.gem}
              castShadow
              receiveShadow
              position={[438.09, -70.16, -238.56]}
              rotation={[0, 0, -Math.PI]}
              scale={[0.1, 0.1, 0.05]}
            />
            <mesh
              name="Cube 59"
              geometry={nodes['Cube 59'].geometry}
              material={materials.gem}
              castShadow
              receiveShadow
              position={[-36.38, -329.55, 28.24]}
              rotation={[-0.08, -0.06, -0.07]}
              scale={[0.16, 0.24, 0.17]}
            />
            <mesh
              name="Cube 581"
              geometry={nodes['Cube 581'].geometry}
              material={materials.gem}
              castShadow
              receiveShadow
              position={[84.4, -238.63, -59.15]}
              rotation={[-0.12, -0.09, 0.22]}
              scale={[0.11, 0.16, 0.1]}
            />
            <mesh
              name="Cube 571"
              geometry={nodes['Cube 571'].geometry}
              material={materials.gem}
              castShadow
              receiveShadow
              position={[-98.99, -165.68, 65.14]}
              rotation={[0.18, -0.06, -0.32]}
              scale={[0.11, 0.11, 0.1]}
            />
            <mesh
              name="Cube 33"
              geometry={nodes['Cube 33'].geometry}
              material={materials.gem}
              castShadow
              receiveShadow
              position={[0, 154.21, -0.19]}
              scale={[0.49, 0.53, 0.47]}
            />
          </group>
          <group name="altar_detail" position={[41.44, -458.68, -804.04]}>
            <mesh
              name="Cube 532"
              geometry={nodes['Cube 532'].geometry}
              material={materials.gem}
              castShadow
              receiveShadow
              position={[-310.61, 0, -212.01]}
              rotation={[-Math.PI / 2, 0, Math.PI / 4]}
              scale={[0.34, 6.47, 1.08]}
            />
            <mesh
              name="Cube 521"
              geometry={nodes['Cube 521'].geometry}
              material={materials.gem}
              castShadow
              receiveShadow
              position={[129.17, 0, -204.35]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
              scale={[0.34, 6.66, 1.08]}
            />
            <mesh
              name="Cube 32"
              geometry={nodes['Cube 32'].geometry}
              material={materials.gem}
              castShadow
              receiveShadow
              position={[246.24, 0, 11.71]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={[0.34, 8.85, 1.08]}
            />
            <mesh
              name="Cube 533"
              geometry={nodes['Cube 533'].geometry}
              material={materials.gem}
              castShadow
              receiveShadow
              position={[117.63, 0, 216.22]}
              rotation={[-Math.PI / 2, 0, Math.PI / 4]}
              scale={[0.34, 8.85, 1.08]}
            />
            <mesh
              name="Cube 522"
              geometry={nodes['Cube 522'].geometry}
              material={materials.gem}
              castShadow
              receiveShadow
              position={[-291.39, 0, 216.22]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
              scale={[0.34, 8.85, 1.08]}
            />
          </group>
          <mesh
            name="altar_ring"
            geometry={nodes.altar_ring.geometry}
            material={materials['altar_ring Material']}
            castShadow
            receiveShadow
            position={[-49.09, -449.45, -794.55]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.74, 0.74, 0.8]}
          />
          <mesh
            name="column_detail"
            geometry={nodes.column_detail.geometry}
            material={materials.gem}
            castShadow
            receiveShadow
            position={[389.95, -162.59, -1146.01]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[5.25, 5.51, 0.64]}
          />
          <mesh
            name="altar_ring1"
            geometry={nodes.altar_ring1.geometry}
            material={materials['altar_ring1 Material']}
            castShadow
            receiveShadow
            position={[-49.09, -441.8, -794.55]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.77, 0.77, 0.84]}
          />
          <mesh
            name="floor"
            geometry={nodes.floor.geometry}
            material={materials.bottom}
            castShadow
            receiveShadow
            position={[-46.49, -749.3, -301.51]}
            scale={[6.28, 1, 6.3]}
          />
          <mesh
            name="ground"
            geometry={nodes.ground.geometry}
            material={materials.sand}
            castShadow
            receiveShadow
            position={[-46.49, -735.21, -301.51]}
            scale={[6.29, 1, 6.31]}
          />
          <mesh
            name="column"
            geometry={nodes.column.geometry}
            material={materials.stairs}
            castShadow
            receiveShadow
            position={[389.98, -321.94, -1146.21]}
            scale={[0.61, 1.03, 1]}
          />
          <mesh
            name="column_base"
            geometry={nodes.column_base.geometry}
            material={materials.stairs}
            castShadow
            receiveShadow
            position={[390.73, -553.94, -1146.21]}
            rotation={[0, 0, -Math.PI]}
            scale={[0.77, 0.08, 1.24]}
          />
          <mesh
            name="column_top"
            geometry={nodes.column_top.geometry}
            material={materials.stairs}
            castShadow
            receiveShadow
            position={[390.73, 18.08, -1146.21]}
            rotation={[0, 0, -Math.PI]}
            scale={[0.68, 0.08, 1.1]}
          />
          <mesh
            name="ring"
            geometry={nodes.ring.geometry}
            material={materials.stairs}
            castShadow
            receiveShadow
            position={[-44.56, -531.06, -988.44]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[12.22, 12.93, 11.72]}
          />
          <mesh
            name="ring1"
            geometry={nodes.ring1.geometry}
            material={materials.stairs}
            castShadow
            receiveShadow
            position={[-45.25, -447.75, -986.96]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[11.15, 11.8, 13.44]}
          />
          <mesh
            name="stair_detail"
            geometry={nodes.stair_detail.geometry}
            material={materials.stairs}
            castShadow
            receiveShadow
            position={[244.54, -470.69, -332.12]}
            rotation={[0, 0.35, 0]}
            scale={[-0.3, 0.57, 0.61]}
          />
          <mesh
            name="stair_detail1"
            geometry={nodes.stair_detail1.geometry}
            material={materials.stairs}
            castShadow
            receiveShadow
            position={[-335.03, -470.69, -332.12]}
            rotation={[0, -0.35, 0]}
            scale={[0.3, 0.57, 0.61]}
          />
          <mesh
            name="ring2"
            geometry={nodes.ring2.geometry}
            material={materials.stairs}
            castShadow
            receiveShadow
            position={[-45.25, -819.97, -870.51]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.77, 0.92, 0.68]}
          />
          <mesh
            name="altar_ground"
            geometry={nodes.altar_ground.geometry}
            material={materials.sand}
            castShadow
            receiveShadow
            position={[-45.25, -922.13, -813.82]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[0.96, 1.15, 0.85]}
          />
          <mesh
            name="ground1"
            geometry={nodes.ground1.geometry}
            material={materials.sand}
            castShadow
            receiveShadow
            position={[-56.25, -966.1, -632.07]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[1.68, 1.81, 1.37]}
          />
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1250}
          shadow-camera-right={1250}
          shadow-camera-top={1250}
          shadow-camera-bottom={-1250}
          position={[188.7, 339.06, 118.47]}
        />
        <OrthographicCamera
          name="Personal Camera"
          makeDefault={true}
          zoom={0.66}
          far={100000}
          near={-100000}
          position={[485.24, 559.71, 1397.59]}
          rotation={[-0.32, 0.3, 0.1]}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" position={[0, 1, 0]} />
      </group>
    </>
  )
}
