from pathlib import Path
import re
import unittest

ROOT = Path(__file__).resolve().parents[1]
HTML = (ROOT / "diamond" / "index.html").read_text(encoding="utf-8")
WORKER = (ROOT / "workers" / "iris-bridge.js").read_text(encoding="utf-8")
RTE = (ROOT / "holographic-core" / "v2" / "index.html").read_text(encoding="utf-8")
README = (ROOT / "README.md").read_text(encoding="utf-8")


class DiamondReviewStaticTests(unittest.TestCase):
    def test_review_console_has_all_major_sections(self):
        for heading in (
            "Claim and review boundary",
            "Three-ring review",
            "Spectrum and realm coverage",
            "Observation ledger",
            "Review output and pass history",
        ):
            with self.subTest(heading=heading):
                self.assertIn(heading, HTML)

    def test_six_coverage_axes_are_declared(self):
        for axis in (
            "electromagnetic",
            "non_electromagnetic",
            "particles",
            "energy_transfer",
            "scales",
            "information",
        ):
            with self.subTest(axis=axis):
                self.assertIn("id:'" + axis + "'", HTML)

    def test_evidence_starts_empty_and_unknown_is_explicit(self):
        self.assertIn("let observations=[],history=[]", HTML)
        self.assertIn("No sample evidence is preloaded", HTML)
        self.assertIn("UNKNOWN", HTML)
        self.assertIn("NOT_MEASURED", HTML)

    def test_review_hash_chain_and_json_export_exist(self):
        self.assertIn("crypto.subtle.digest", HTML)
        self.assertIn("prior_review_hash", HTML)
        self.assertIn("review_hash", HTML)
        self.assertIn("dualis-diamond-review-session.json", HTML)
        self.assertIn("dualis-diamond-review-history.json", HTML)

    def test_simulation_is_not_silently_promoted_to_observation(self):
        self.assertIn("SIMULATION_OUTPUT", HTML)
        self.assertIn("Source/method appears simulated", HTML)

    def test_iris_allowlists_only_explicit_diamond_paths(self):
        for path in ('"/diamond"', '"/diamond/"', '"/diamond/index.html"'):
            with self.subTest(path=path):
                self.assertIn(path, WORKER)
        self.assertIn('const APEX_BLOCK = new Set(["/", "/index.html"])', WORKER)

    def test_existing_rte_links_to_console(self):
        self.assertIn('href="/diamond"', RTE)

    def test_docs_keep_production_boundary_explicit(self):
        self.assertIn("No preloaded evidence", README)
        self.assertIn("production deployment, or DNS changes", README)

    def test_inline_script_exists_exactly_once(self):
        scripts = re.findall(r"<script>(.*?)</script>", HTML, flags=re.DOTALL)
        self.assertEqual(len(scripts), 1)
        self.assertTrue(scripts[0].strip())


if __name__ == "__main__":
    unittest.main()
