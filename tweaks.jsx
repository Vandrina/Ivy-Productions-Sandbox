// Ivy — Web Work — Tweaks panel
// Controls: title font, density, ornament intensity, embed-mode preview.

const IVY_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "titleFont": "metamorphous",
  "density": "cozy",
  "ornament": "normal",
  "embedPreview": false
}/*EDITMODE-END*/;

function IvyTweaksApp() {
  const [t, setTweak] = useTweaks(IVY_TWEAK_DEFAULTS);

  // Mirror changes into window.IvyTweaks (which persists to localStorage
  // for cross-page survival).
  React.useEffect(() => {
    if (window.IvyTweaks) {
      window.IvyTweaks.set('titleFont',    t.titleFont);
      window.IvyTweaks.set('density',      t.density);
      window.IvyTweaks.set('ornament',     t.ornament);
      window.IvyTweaks.set('embedPreview', t.embedPreview);
    }
  }, [t.titleFont, t.density, t.ornament, t.embedPreview]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Title font" />
      <TweakSelect
        label="Page title"
        value={t.titleFont}
        options={[
          { value: 'metamorphous', label: 'Metamorphous (default)' },
          { value: 'newrocker',    label: 'New Rocker' },
          { value: 'pirata',       label: 'Pirata One' },
          { value: 'uncial',       label: 'Uncial Antiqua' },
          { value: 'medieval',     label: 'MedievalSharp' },
        ]}
        onChange={(v) => setTweak('titleFont', v)}
      />

      <TweakSection label="Rhythm" />
      <TweakRadio
        label="Density"
        value={t.density}
        options={['cozy', 'normal', 'loose']}
        onChange={(v) => setTweak('density', v)}
      />

      <TweakSection label="Ornament" />
      <TweakRadio
        label="Intensity"
        value={t.ornament}
        options={['subtle', 'normal', 'lush']}
        onChange={(v) => setTweak('ornament', v)}
      />

      <TweakSection label="Context" />
      <TweakToggle
        label="Embed preview"
        value={t.embedPreview}
        onChange={(v) => setTweak('embedPreview', v)}
      />
      <div style={{
        fontSize: 10.5,
        opacity: 0.62,
        padding: '4px 14px 10px',
        lineHeight: 1.5
      }}>
        Simulates how the page looks when embedded inside the larger Ivy site
        (hides the breadcrumb, trims padding, dims the watermark).
      </div>
    </TweaksPanel>
  );
}

const __ivyTweaksRoot = document.createElement('div');
document.body.appendChild(__ivyTweaksRoot);
ReactDOM.createRoot(__ivyTweaksRoot).render(<IvyTweaksApp />);
