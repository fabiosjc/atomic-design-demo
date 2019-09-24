import React from "react";
import "./App.css";
import Header from "./components/organisms/header/Header";
import "./res/styles/reset.css";

function App() {
  return (
    <div className="App">
      <Header>
        {/* <Logo></Logo>
        <Search></Search>
        <Menu></Menu> */}
      </Header>

      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed metus
          risus. Donec at ultrices est. Mauris pellentesque ipsum ac quam
          volutpat pretium. Duis pellentesque, mauris non accumsan imperdiet,
          turpis nibh tempus lorem, nec rhoncus risus est ac lectus. Morbi
          faucibus lectus ut elit luctus bibendum. Curabitur eu mattis nulla,
          sed iaculis velit. In hac habitasse platea dictumst. Vestibulum varius
          justo a justo interdum dictum. Mauris nec massa non mi ullamcorper
          volutpat et euismod mauris. Vivamus mollis suscipit eros ut varius.
          Curabitur tincidunt eget velit vel bibendum. Quisque id augue in dolor
          suscipit interdum sed sit amet lectus. Pellentesque posuere ligula
          urna, sed tristique enim auctor vel. Donec tempor mauris et erat
          eleifend rutrum. Vivamus et leo sit amet leo luctus dignissim. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <p>
          Cras risus nibh, eleifend eget mattis sit amet, egestas finibus nisi.
          In eu ligula vel elit malesuada scelerisque vel vitae ex. Nulla libero
          enim, suscipit in aliquet quis, ullamcorper dignissim metus.
          Vestibulum mattis leo ac diam interdum molestie. In eget luctus justo,
          et semper arcu. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Curabitur ipsum mi, hendrerit at
          iaculis sed, facilisis non nulla. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Ut
          tincidunt ligula orci, a faucibus odio tristique at.
        </p>

        <p>
          Morbi id turpis sit amet ante lacinia vulputate ultrices ut nunc.
          Morbi malesuada orci mollis dolor faucibus, id suscipit ex consequat.
          Sed auctor ut felis dignissim volutpat. Donec risus odio, aliquet id
          diam ac, molestie ornare eros. Suspendisse mollis egestas odio.
          Vivamus tincidunt cursus pellentesque. Morbi lobortis tincidunt justo.
          Quisque accumsan commodo mi, a lacinia elit iaculis quis. Duis ut
          congue mauris. Duis vel elementum leo. Maecenas at neque non orci
          condimentum sollicitudin. Vivamus ut enim convallis, commodo nisi at,
          congue augue. Donec viverra tristique turpis vitae venenatis. Donec
          ullamcorper tellus id vulputate tempor. Donec eget nulla quis enim
          auctor commodo nec at elit.
        </p>

        <p>
          Phasellus massa quam, ultricies sed dui ac, pharetra finibus orci.
          Pellentesque in purus iaculis, pellentesque mauris non, mattis metus.
          Proin dapibus elit in fermentum congue. Suspendisse bibendum enim
          nulla, vitae tristique purus elementum vitae. Nunc dictum, nibh in
          posuere tincidunt, orci dui ullamcorper nibh, aliquam suscipit sapien
          neque ut magna. Vestibulum a nulla dapibus, rutrum ipsum id, euismod
          quam. Donec vel elementum lacus. Quisque vitae orci egestas, tincidunt
          odio ut, tincidunt ipsum. Etiam non orci sit amet elit sollicitudin
          pulvinar. Mauris vehicula volutpat nibh, et dapibus est malesuada non.
          Donec cursus et risus id vulputate. Phasellus vitae justo a ex auctor
          rhoncus id vel libero. Etiam auctor mattis ornare. Quisque quis lorem
          quis enim euismod facilisis. Suspendisse id tincidunt magna.
        </p>

        <p>
          Fusce aliquam metus sollicitudin massa pretium dictum. Curabitur nunc
          nunc, suscipit sed tristique non, condimentum et urna. Curabitur id
          ante at risus vestibulum tempus tincidunt in sapien. Nunc vitae luctus
          ex, quis blandit tellus. Proin a ex faucibus felis rhoncus commodo.
          Cras lobortis justo ut neque placerat dictum. Vestibulum vitae magna
          at arcu iaculis malesuada in ut arcu. Donec at condimentum nisl. Sed
          faucibus odio vel ligula tempor facilisis. Curabitur auctor, nibh ac
          imperdiet sodales, nunc nunc lobortis nisi, in efficitur libero enim
          non erat. Donec felis ante, dapibus vitae dictum eget, convallis id
          nisl. Nunc mollis felis ac felis tempor laoreet sit amet dapibus
          augue.
        </p>

        <p>
          Curabitur eu sem ac ipsum molestie pharetra. Proin ante sapien,
          sagittis vel pharetra a, ultricies eget elit. Donec id urna viverra
          nunc pulvinar malesuada. Nulla quis lobortis leo. Donec efficitur
          ligula vel ante faucibus sodales. Cras metus nibh, rhoncus vitae mi
          vel, pulvinar volutpat velit. Integer pharetra ex ligula, a lacinia
          dui facilisis in. Ut mi magna, bibendum nec purus vel, ultrices
          placerat tortor. In accumsan felis tristique, suscipit turpis eget,
          vehicula nisl.
        </p>

        <p>
          Mauris placerat sit amet ante sed scelerisque. Cras ut pellentesque
          sapien. Integer eleifend volutpat suscipit. Mauris vulputate nisl sit
          amet felis ullamcorper, at fringilla mi ullamcorper. Curabitur finibus
          malesuada pretium. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Nunc mattis condimentum
          sagittis. Nunc metus enim, auctor sit amet euismod non, ornare a
          lectus. Nulla facilisi. Nam lacinia, est porttitor congue tristique,
          lorem lorem iaculis nisi, vitae laoreet arcu dolor sed quam. Proin
          accumsan enim quis lacus pellentesque, sed consectetur leo
          pellentesque.
        </p>

        <p>
          Duis vulputate tincidunt justo nec tempus. Etiam hendrerit tincidunt
          eleifend. In fringilla commodo felis id dignissim. Aliquam pretium
          scelerisque mauris, quis sagittis nulla hendrerit sit amet. Duis
          rhoncus venenatis elit eu pellentesque. Donec non orci ac purus ornare
          volutpat eget ut tortor. Cras ex nisi, consectetur vel rhoncus sed,
          commodo ut massa. Donec vitae diam ligula. Fusce id maximus tellus, ac
          ultrices tortor. Sed pretium, leo non vulputate congue, nisl arcu
          lacinia nibh, vel consectetur est ligula ut ante. Duis feugiat
          sollicitudin ex et efficitur. Integer laoreet quam at justo sodales
          egestas. In ac est suscipit, rhoncus velit sed, egestas dolor. Proin
          eu lorem feugiat, vulputate nisi in, efficitur purus. Pellentesque
          iaculis hendrerit turpis, sed venenatis felis porta eu.
        </p>

        <p>
          Etiam non ipsum maximus lectus viverra pretium nec sit amet dolor.
          Suspendisse potenti. Vivamus porttitor nibh risus, eget mattis est
          bibendum quis. Integer auctor sem metus, eget varius velit vehicula
          id. Morbi facilisis nisi et orci hendrerit cursus. Sed a ipsum ac
          augue condimentum pharetra vel non nunc. Phasellus mattis metus at
          risus bibendum commodo. Quisque tempor viverra vulputate. Morbi
          condimentum orci magna, imperdiet semper risus iaculis eu. Proin
          laoreet consequat dolor sed tempor.
        </p>

        <p>
          Maecenas id blandit nulla. Aliquam at metus sit amet ante gravida
          auctor. Curabitur mattis mi vitae hendrerit porta. Duis a ante sit
          amet lectus commodo ornare. Aenean et tortor ac nibh ornare pretium.
          Vivamus accumsan egestas magna vel elementum. Maecenas eleifend
          viverra odio a aliquam. Sed eu laoreet velit. Pellentesque ac
          scelerisque sapien. Duis sit amet varius quam. Donec at condimentum
          est. Aenean varius leo eu dictum mattis. Donec id enim massa.
        </p>

        <p>
          Cras diam massa, blandit nec faucibus at, dignissim vel est. Nullam
          ultricies ut justo ut lobortis. Quisque nisi turpis, ornare quis sem
          nec, facilisis imperdiet urna. Duis eget elit augue. In mollis eget
          arcu vel tempor. Nullam scelerisque diam ac enim pellentesque mollis.
          Quisque sed ex ac ligula tincidunt placerat. Pellentesque nibh ligula,
          vehicula nec dictum eget, condimentum non sem. Sed blandit nisl eget
          arcu cursus, quis commodo velit lobortis. Aliquam vestibulum, erat nec
          elementum sagittis, dolor nunc feugiat nisi, at viverra lorem velit
          vitae dui. Aliquam sed leo risus. Cras vehicula turpis eget augue
          interdum, a venenatis justo ullamcorper. Praesent porttitor lectus sed
          ligula pharetra, ut iaculis eros tincidunt. Vivamus mattis varius nisi
          nec mollis. Nam risus justo, posuere ac rutrum ut, porta vitae magna.
        </p>
      </section>
    </div>
  );
}

export default App;
